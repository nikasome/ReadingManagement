import React, { Component } from 'react';
import firebase from './firebase.js';
import './App.css';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.user && this.state.user.displayName}</p>
        <img src={this.state.user && this.state.user.photoURL} alt="icon" />

        {this.state.user ? (
          <button onClick={this.logout}>Google logout</button>
        ) : (
          <button onClick={this.login}>Google Login</button>
        )}
      </div>
    );
  }
}

export default App;
