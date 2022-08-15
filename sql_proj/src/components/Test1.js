import React, { Component } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import styles from '../App.css';

export default class Blah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      loading: true,
      text: '',
    };
  }

  componentDidMount = () => {
    const axios = require('axios');
    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: 'aquarius', day: 'today' },
      headers: {
        'X-RapidAPI-Key': '323eb200eamsh2317ec9d577583ap18dd12jsnbe3a22e14014',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
      },
    };

    axios.request(options).then(
      function (response) {
        this.setState({
          data: JSON.parse(JSON.stringify(response.data, null, 4)),
        });
        this.setState({ loading: false });
      }.bind(this)
    );
  };

  render() {
    let loading = this.state.loading;
    let arr = this.state.data;
    let values = Object.values(arr);
    arr = values;

    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr);
    }

    let returnedArray = [];
    let returnedKeys = [];

    for (const [key, value] of result.entries()) {
      let returnedKey = key;
      let returnedValue = value;
      returnedArray.push(returnedValue);
      returnedKeys.push(returnedKey);
    }

    return (
      <div>
        {loading ? (
          'Loading'
        ) : (
          <>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 50 }}
              layout
            >
              <div className='container'>
                <p>Date range:</p>
                {returnedArray[0][0]}
                <p>Current date:</p>
                {returnedArray[0][1]}
                <p>Description:</p>
                {returnedArray[0][2]}
                <p>Compatability:</p>
                {returnedArray[0][3]}
                <p>Mood:</p>
                {returnedArray[0][4]}
                <p>Color:</p>
                {returnedArray[0][5]}
                <p>Lucky number:</p>
                {returnedArray[0][6]}
                <p>Lucky Time:</p>
                {returnedArray[0][7]}
              </div>
            </motion.div>
          </>
        )}
      </div>
    );
  }
}
