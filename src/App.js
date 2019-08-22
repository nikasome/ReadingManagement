import React, { Component } from 'react';
import firebase from './firebase.js';
import HeadBar from './components/molecules/AppBar/index.js';
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
        {this.state.user ? (
          <HeadBar photoURL={this.state.user.photoURL} />
        ) : null}

        <p>Name: {this.state.user && this.state.user.displayName}</p>

        {this.state.user ? (
          <div>
            <button onClick={this.logout}>Google Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={this.login}>Google Login</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
