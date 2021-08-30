var express = require('express');
const app = express();

const port = 3000;

const quotes = [
  'Always go one step further',
  'Champions are made when nobody is looking',
  'Be the change you want to see in the world',
  'Friends show their love in times of trouble, not in happiness',
  'Believe you can and you are halfway there'
];

//Utility Function to return a random integer
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// const handleRequest = function(req, res) {
//   console.log(`Endpoint: ${req.url} Method: ${req.method}`);

//   // redirect users to /quote if they try to hit the homepage. This should already work, no changes needed
//   if (req.url == '/') {
//     console.log('redirecting');
//     res.writeHead(301, {...headers, Location: `http://localhost:${port}/quote`}) //redirect to quote
//     res.end();
//   }

//   // TODO: GET ONE
//   if ((req.url == '/quote/' || req.url == '/quote') && req.method == "GET") {
//     console.log('Getting one quote');
//     var quoteNum = getRandomInt(0, quotes.length);

//     res.writeHead(200);
//     res.end(quotes[quoteNum]);

//   }
//   // TODO: POST/CREATE
//   else if ((req.url == '/quote/' || req.url == '/quote') && req.method == "POST") {
//     console.log('Posting a new quote');
//     quotes.push(req.data);
//     res.writeHead(201);
//     res.end();
//   }

// //CATCH ALL ROUTE
//   else {
//     res.writeHead(404,headers);
//     res.end('Page not found');

//   }
// }

app.get('/', (req, res) {
  console.log('redirecting');
  res.render('index') //redirect to quote
});

app.get('/quote/?', (req, res) {
  console.log('Getting one quote');
  var quoteNum = getRandomInt(0, quotes.length);
  res.send(quotes[quoteNum]);
});

// app.post('/quote/' || '/quote' , (req, res) {
//   console.log('Posting a new quote');
//   quotes.push(req.body);
//   res.send('quote posted');
// })




const server = http.createServer(handleRequest);
server.listen(port);

console.log('Server is running in the terminal!');
console.log(`Listening on http://localhost:${port}`);
