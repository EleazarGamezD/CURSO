require ('dotenv').config ();
const mongoose = require ('mongoose');
const express = require ('express');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const expressJwt = require ('express-jwt');
const User = require('./user');

const mongoUrl = 'mongodb+srv://' + process.env.MONGOATLAS;
console.log(mongoUrl,{ssl:true})
mongoose.set('strictQuery', false);
mongoose.connect(mongoUrl, { ssl: true })

const port = 3000;
const app = express ();
app.use(express.json());
console.log (process.env.SECRET)
const validateJwt = expressJwt.expressjwt ({
  secret: process.env.SECRET,
  algorithms: ['HS256'],
});
const signedToken = _id => jwt.sign ({_id}, process.env.SECRET);

app.post ('/register', async (req, res) => {
  const {body} = req;
  console.log ({body});
  try {
    const isUser = await User.findOne ({email: body.email});
    if (isUser) {
      return res.status (403).send ('usuario ya existe ');
    }
    const salt = await bcrypt.genSalt ();
    const hashed = await bcrypt.hash (body.password, salt);
    const user = await User.create ({
      email: body.email,
      password: hashed,
      salt,
    });

    const signed = signedToken (user._id);
    res.status (201).send (signed);
  } catch (err) {
    console.log (err);
    res.status (500).send (err.message);
  }
});

app.post ('/login', async (req, res) => {
  const {body} = req;
  try {
    const user = await User.findOne ({email: body.email});
    if (!user) {
      res.status (403).send ('Usuario y/o contraseña invalida');
    } else {
      const isMatch = await bcrypt.compare (body.password, user.password);
      if (isMatch) {
        const signed = signedToken (user._id);
        res.status (200).send (signed);
      } else {
        res.status (403).send ('Usuario y/o contraseña invalida');
      }
    }
  } catch (err) {
    console.log (err);
    res.status (500).send (err.message);
  }
});
const findAndAssignUser = async (req, res, net) => {
  try {
    const user = await User.findById (req.user._id);
    if (!user) {
      return res.status (401).end ();
    }
    req.user = user;
    next ();
  } catch (e) {
    next (e);
  }
};

const isAuthenticated = express.Router ().use (validateJwt, findAndAssignUser);

app.get ('/lele', isAuthenticated, (req, res) => {
  (req, res) => {
    res.send (req.user);
  };
});

app.listen(port, () => {
  console.log ('listening in port', port);
})
