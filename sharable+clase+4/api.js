const express = require ('express');
const mongoose = require ('mongoose');
const app = express ();
const Animal = require ('./animal.controller');
const {Auth, isAuthenticated} = require ('./auth.controller');
const port = 3000;

mongoose.connect (
  'mongodb+srv://sa:21121733@cluster0.gschvgu.mongodb.net/myapp?retryWrites=true&w=majority'
);

app.use (express.json ());

app.get ('/animals', isAuthenticated, Animal.list);
app.post ('/animals', isAuthenticated, Animal.create);
app.put ('/animals/:id', isAuthenticated, Animal.update);
app.patch ('/animals/:id', isAuthenticated, Animal.update);
app.delete ('/animals/:id', isAuthenticated, Animal.destroy);
// para proteger los endpoints de animal se debe colocar la constante
// IsAuthenticated que asegura que el Usuario debe estar registrado en la web
// para poder acceder a estos Endpoints

app.post ('/login', Auth.login);
app.post ('/register', Auth.register);

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
