import React, { Component } from 'react';
import firebase from './firebase.js';
import UserIcon from './components/atoms/UserIcon/index.js';
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

        {this.state.user ? (
          <div>
            <UserIcon style={{ display: 'block' }}>
              {this.state.user.photoURL}
            </UserIcon>
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
