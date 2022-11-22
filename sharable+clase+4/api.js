const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const Animal = require ('./animal.controller');
const {Auth, IsAuthenticated} = require ('./auth.controller');
const port = 3000;

mongoose.connect (
  'mongodb+srv://sa:21121733@cluster0.gschvgu.mongodb.net/myapp?retryWrites=true&w=majority'
);

app.use (express.json ());

app.get ('/animals', IsAuthenticated, Animal.list);
app.post ('/animals', IsAuthenticated, Animal.create);
app.put ('/animals/:id', IsAuthenticated, Animal.update);
app.patch ('/animals/:id', IsAuthenticated, Animal.update);
app.delete ('/animals/:id', IsAuthenticated, Animal.destroy);
// para proteger los endpoints de animal se debe colocar la constante
// IsAuthenticated que asegura que el Usuario debe estar registrado en la web
// para poder acceder a estos Endpoints

app.post ('/login', Auth.create);
app.post ('/register', Auth.create);

app.use (express.static ('app'));

app.get ('/', (req, res) => {
  res.sendFile (`${__dirname}/index.html`);
});
app.get ('*', (req, res) => {
  res.status (404).send ('Esta página no existe :(');
});

app.listen (port, () => {
  console.log ('Arrancando la aplicación!');
});
