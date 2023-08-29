import express from 'express';
import path from 'path'; //importando modulo de path "directorios"
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'; // importando modulo de lectura de archivo ENV variables de entornos
import url from 'url';

dotenv.config (); // este comando llama al archivo de variable de entorno.
const app = express ();
sgMail.setApiKey (process.env.SGKEY);
console.log (process.env.SGKEY);
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.static(path.join(__dirname,)));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post ('/send', async (req, res) => {
  const {to, subject, html} = req.body;
  const msg = {
    to,
    from: process.env.FROM,
    subject,
    html,
  };

  try {
    await sgMail.send (msg);
    res.sendStatus (204);
  } catch (e) {
    const messages = e.response.body.errors.map (e => e.message).join (' ');
    res.status (400).send (messages);
  }
});



app.listen (3000, () => console.log ('ejecutando la app'));
