const express = require ('express');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');
const expressJwt = require ('express-jwt');
const User = require ('./user.model');

const app = express ();
app.use (express.json ());

// validando el token
const validateJwt = expressJwt.expressjwt ({
  secret: process.env.SECRET1,
  algorithms: ['HS256'],
});
const signedToken = _id => jwt.sign ({_id}, process.env.SECRET1); //firmando token con el ID del usuario

const findAndAssignUser = async (req, res, next) => {
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
/////////////////controlador de autenticado/////
const Auth = {
  // endpoint de login///////////
  login: async (req, res) => {
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
  },

  // endpoint de registro de usuarios ///////////
  register: async (req, res) => {
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
  },
};

module.exports = {Auth, isAuthenticated}; //exportando el controlador ////////////
