const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const axios = require('axios');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async (req, res) => {
  const twiml = new MessagingResponse();

  try {
    // Envoyer la commande à l'API
    await axios.put('http://173.249.22.169:9005/api/house/update', {
      command_text: String(req.body.Body)
    });

    // Répondre au message SMS
    twiml.message('Message bien reçu');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la commande à l\'API :', error);
    twiml.message('Erreur lors du traitement de la commande');
  }

  res.type('text/xml').send(twiml.toString());
});

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Serveur Express en écoute sur le port ${PORT}`);
});
