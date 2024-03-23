const express = require('express');
const bodyParser = require('body-parser');
const { MessagingResponse } = require('twilio').twiml;
const axios = require('axios');

const accountSid = 'AC20958dc1c0bd4bbb96eb871337634b52';
const authToken = '73e8e21c157748c4ebae61be2fc8a2d2';
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  const twiml = new MessagingResponse();
  axios({
    method: 'post',
    url: 'http://173.249.22.169:9005/api/house/update',
    data: {
        command_text: req.body.Body
    }
  });
  twiml.message("Message bien reçu")

  res.type('text/xml').send(twiml.toString());
});

app.listen(8888, () => {
  console.log('Express server listening on port 8888');
});
