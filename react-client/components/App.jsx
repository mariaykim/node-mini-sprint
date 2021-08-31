import React from 'react';
import QuoteBlock from './QuoteBlock.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes : [],
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/quote')
    .then(response => {
      this.setState({
        quotes : [response.data]
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      quotes: [...this.state.quotes, this.state.value]
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

      <QuoteBlock quotes={this.state.quotes} id="quote"></QuoteBlock>
      </div>
    )
  }
};