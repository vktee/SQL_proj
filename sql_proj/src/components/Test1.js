import React, { Component } from 'react';

export default class Blah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'not yet gotten',
      loading: true,
    };
  }

  componentDidMount = () => {
    const axios = require('axios');
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {
        interval: '5min',
        function: 'TIME_SERIES_INTRADAY',
        symbol: 'MSFT',
        datatype: 'json',
        output_size: 'compact',
      },
      headers: {
        'X-RapidAPI-Key': '323eb200eamsh2317ec9d577583ap18dd12jsnbe3a22e14014',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then(
        function (response) {
          this.setState({
            data: JSON.stringify(response.data, undefined, '\t'),
          });
          this.setState({ loading: false });
        }.bind(this)
      )
      .catch(function (error) {
        console.error(error);
      });
  };

  render() {
    let arr = this.state.data;
    let loading = this.state.loading;
    return (
      <div className='App'>
        {loading ? <p>Loading...</p> : <pre>{arr}</pre>}
      </div>
    );
  }
}
