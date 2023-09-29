import dotenv from 'dotenv';
const mongoose = require('mongoose');
const express = require ('express');
const user = require ('./user.controller');
const app = express ();
const port = 3000;

dotenv.config (); // este comando llama al archivo de variable de entorno.
app.use (express.json ());
mongoose.connect ( process.env.MONGODB );

app.get ('/users', user.list);
app.post ('/users', user.create);
app.get ('/users/:id', user.get);
app.put ('/users/:id', user.update);
app.patch ('/users/:id', user.update);
app.delete ('/users/:id', user.destroy);
app.use (express.static ('app'));
app.get ('/', (req, res) => {
  res.sendFile (`${__dirname}/index.html`);
});
app.get ('*', (req, res) => {
  res.status (404).send ('esta pagina no existe');
});

app.listen (port, () => {
  console.log ('arrancando la aplicación');
});
