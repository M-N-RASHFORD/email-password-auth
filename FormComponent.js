import React from 'react';
import firebase from 'firebase';
import './Authentication';
import './App-one.css';
import {auth} from './Authentication';
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleSigupUser = this.handleSigupUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGoogleAuth = this.handleGoogleAuth.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  handleSigupUser = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
  handleLoginUser = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
  handleGoogleAuth = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  render(){
    return (
      <div className="container">
        <center>
        <>
          <tr>
            <td><input type="email" value="this.state.email" placeholder="Email" onChange={this.handleChange} name="email" className="input-content"/></td>
          </tr>
          <tr>
            <td><input type="password" value="this.state.password" placeholder="Password" onChange={this.handleChange} name="password" className="input-content" /></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.handleLoginUser}>SigIn</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.handleSigupUser}>SigUp</button></td>
          </tr>
          <tr>
            <td><button type="button" onClick={this.handleGoogleAuth}>Sign in with google</button></td>
          </tr>
        </>
        </center>
      </div>
    );
  }
}
