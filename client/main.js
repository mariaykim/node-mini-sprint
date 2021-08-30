$(document).ready(function() {

// get a quote from the server when the page loads and add it to the dom
  getQuote();

// when the user enters data and clicks submit, post the quote to the server
  $('#submit').click((e) => {
    e.preventDefault();
    let quote = $('input').val();
    addQuote(quote);
  });

  function getQuote(){
    //YOUR CODE HERE, Add a GET request
    $.ajax({
      url: '/quote',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        $('#quote').append(`<h2>${data}</h2>`);
      },
      error: function (error) {
        console.log(error);
      }
    });
  }

  function addQuote(quote){
    //YOUR CODE HERE, Add a POST request
    $.ajax({
      url: '/quote',
      type: 'POST',
      data: JSON.stringify({ quote: quote}),
      dataType: 'json',
      content-type: 'application/json',
      success: function (data) {
        $('#quotes').append(`<h3>${data}</h3>`);
      },
      error: function (error) {
        console.log(error);
      }
    })
  }

});
