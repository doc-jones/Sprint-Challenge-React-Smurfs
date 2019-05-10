import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import { Route, NavLink } from 'react-router';
import Smurf from './components/Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      id: null
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
    componentDidMount() {
      axios
        .get(`http://localhost:3333/smurfs/`)
        .then(res => this.setState(prevState=>{ smurfs: res.data }))
        // console.log(res.data);
        .catch(err => console.log(err));
    }

    

  

  render() {
    return (
      <div className="App">
                <nav>
          <h1 className="smurf-header">Smurfs </h1>
          <div className="nav-links">
            <NavLink to="/smurf-form">Add Smurf</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
        </nav>

          <Route exact path = "/" render ={(props)=><Smurfs smurfs = {this.state.smurfs} />} />
      <Route path = "/smurf-form" render ={(props)=><SmurfForm updateSmurfs={this.updateSmurfs}/>} />
      <Route
    path="/smurfs/:id"
    render={props => (
      <Smurf {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}
        setUpdateForm={this.setUpdateForm}
      />
    )}
  />
      </div>
    );
  }
}


export default App;
