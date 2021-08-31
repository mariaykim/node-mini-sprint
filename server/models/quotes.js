var db = require('../db');

module.exports = {

  getOne: function (callback) {
    var idNum = db.query('COUNT * from quotesTable', function(err,results) {
      if (err) {
        console.log('error');
      } else {
        return results;
      }
    });
    db.set(@whichQuote := idNum)
    var queryStr = 'select quoteText from quotesTable where id=@whichQuote';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },

  create: function (params, callback) {
    // create a quote
    var queryStr = 'INSERT INTO QUOTESTABLE(quotesText) values ?';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  }

};
