const express = require ('express');
const app = express ();
const port = 3000;
app.get ('/', (req, res) => {
  res.status (200).send ('chanchito feliz');
});

app.post ('/', (req, res) => {
  res.status (201).send ('creado chanchito');
});

app.listen (port, () => {
  console.log ('arrancando la aplicacion');
});
