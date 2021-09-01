import React from 'react';
import QuoteBlock from './QuoteBlock.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes : ['no'],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/quote')
    .then(response => {
      console.log('is this working???  ')
      console.log(response.data[0].quotesText);
      var theGetResponse = response.data[0].quotesText;
      var addQuote = [];
      addQuote.push(theGetResponse);
      //console.log('I received the GET request data: ', response);
      this.setState({
        quotes : addQuote
      })
    })
    .catch(error => {
      console.log('I did not receive the GET request data: ', error);
    })
    console.log('What is my current quotes array state?: ' , this.state.quotes);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/quote', { 'quote' : this.state.value})
    .then(response => {
      var temp = [];
      for (var i = 0; i < this.state.quotes.length; i++) {
        temp.push(this.state.quotes[i]);
      }
      this.setState({
        quotes: [...temp, this.state.value]
      })
    })
    .catch(error => {
      console.log('There is an error with Axios POST', error);
    })
  }

  render() {
    return(
      <div>
      <h1>Random Quote Generator</h1>

      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <input type="submit" value="Submit" />
      </form>

      <QuoteBlock quotes={this.state.quotes}></QuoteBlock>
      </div>
    )
  }
};