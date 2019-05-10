import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import { Route, NavLink } from 'react-router-dom';
import Smurf from './components/Smurf';
import { format } from 'util';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
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

    getItemById = id => {
      axios
        .get(`http://localhost:3333/itemById/${id}`)
        .then(res => this.setState({ activeSmurf: res.data }))
        .catch(err => console.log(err));
    };
  
      deleteSmurf = (e, id) => {
        e.preventDefault();
        axios
          .delete(`http://localhost:3333/items/${id}`)
          .then(res => {
            this.setState({
              smurfs: res.data
            });
            this.props.history.push(`/smurf-form/${id}`);
          })
          .catch(err => {
            console.log(err);
          });
      };
    
      updateSmurf = () => {
        axios
          .put(
            `http://localhost:3333/items/${this.state.editingId}`,
            this.state.item)
          .then(res => {
            this.setState({
              smrufs: res.data,
              editingId: null,
              isEditing: false,
              smurf: ''
            });
          })
          .catch(error => console.log(error));
      };
    
      setUpUpdateForm = (ev, smurf) => {
        ev.preventDefault();
        this.setState({
          smurf, 
          update: true,
          isEditing: true,
          editingId: smurf.id
        });
      };
    

  render() {
    return (
      <div className="App">
          <nav>
          <h1>Smurfs </h1>
          <div className="nav-links">
            <NavLink to="/smurf-form">Add Smurf</NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
        </nav>
        {/* <Route exact path="/" component={Home} /> */}
        <Route
          exact
          path="/smurfs"
          render={props => (
            <Smurfs
              {...props} 
              smurfs={this.state.smurfs}
              getItemById={this.getItemById}
            />
          )}
        />
        <Route
          path="/smurfs/:id"
          render={props => (
            <Smurf
              {...props}
              deleteSmurf={this.deleteSmurf}
              smurf={this.state.activeSmurf}
              updateSmurf={this.setUpUpdateForm}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
      </div>
    );
  }
}



export default App;
