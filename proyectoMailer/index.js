import express from 'express';
import path from 'path'; //importando modulo de path "directorios"

const app = express ();
app.use (express.json ());
app.use (express.static ('app'));
app.get ('/', (req, res) => {
  res.sendFile (`${path.resolve ()}/index.html`);
});
app.listen (3000, () => console.log ('ejecutando la app'));
