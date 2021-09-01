const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const router = express.Router();
var models = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use(express.static('../react-client/dist/'));

const port = 3000;

// const quotes = [
//   'Always go one step further',
//   'Champions are made when nobody is looking',
//   'Be the change you want to see in the world',
//   'Friends show their love in times of trouble, not in happiness',
//   'Believe you can and you are halfway there'
// ];

// app.get('/', (req, res) => {
//   console.log('redirecting');
//   res.render('index') //redirect to quote
// });

app.get('/quote', (req, res) => {
  console.log('Getting one quote');
  models.quotes.getOne((err, data) => {
    if (err) {
      console.log('get one error occurred');
      res.status(501);
    } else {
      console.log('successful get one, sending data: ', data);
      res.status(200).send(data);
    }
  })
});

app.post('/quote' , (req, res) => {
  //console.log(req.body);
  console.log('Posting a new quote', req.body.quote);
  var params = [req.body.quote];
  models.quotes.create(params, (err, data) => {
    if (err) {
      console.log('Error with post request', err);
      res.status(503);
    } else {
      console.log('Sending successful data');
      console.log(data);
      res.send(data);
    }
  })
})

app.listen(port, () => {
  console.log(`Listening express server on port ${port}!`)
});