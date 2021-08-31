const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const router = express.Router();


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

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

app.get('/', (req, res) => {
  console.log('redirecting');
  res.render('index') //redirect to quote
});

app.get('/quote', (req, res) => {
  console.log('Getting one quote');
  var quoteNum = getRandomInt(0, quotes.length);
  models.quotes.getOne(quoteNum, (err, data) => {
    if (err) {
      res.error(err);
    } else {
      res.status(200).send(data);
    }
  })
});

app.post('/quote' , (req, res) => {
  //console.log(req.body);
  console.log('Posting a new quote');
  //quotes.push(req.body.quote);
  //console.log(quotes);
  models.create(req.body.quote, (err, data) => {
    if (err) {
      res.error(err);
    } else {
      res.send(data);
    }
  })
})

app.listen(port, () => {
  console.log(`Listening express server on port ${port}!`)
});