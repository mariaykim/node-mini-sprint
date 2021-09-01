var db = require('../db');

module.exports = {

  getOne: function (callback) {
    console.log('get one function invoked')
    // db.query('SELECT COUNT(*) from quotesTable', function(err,results) {
    //   if (err) {
    //     console.log('error');
    //   } else {
    //     ;
    //   }
    // });

        //Utility Function to return a random integer
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    var temp = getRandomInt(0, 4);
    console.log(temp);
    var queryStr = 'select quotesText from quotesTable where id=2';
    db.query(queryStr, function(err, results) {
      if (err) {
        console.log('getOne function not working', err);
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  create: function (params, callback) {
    // create a quote
    var queryStr = 'INSERT INTO QUOTESTABLE(quotesText) value (?)';
    db.query(queryStr, params, function(err, results) {
      if (err) {
        console.log('what error');
      } else {
      console.log('please work');
      callback(null, results);
      }
    });
  }

};
