import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import { Router, Route, Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: {
        id: '',
        name: '',
        age: '',
        height: ''
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
    componentDidMount() {
      axios
        .get(`http://localhost:3333/smurfs/${this.props.match.params.id}`)
        .then(res => this.setState({ item: res.data }))
        .catch(err => console.log(err));
    }

    changeHandler = ev => {
      let value = ev.target.value;
      const name = ev.target.name;
      }
  
      this.setState(prevState => ({
        smurf: {
          ...prevState.smurf,
          [name]: value
        }
      }));
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.addSmurf(this.state.smurf);
    };
  

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }


export default App;
