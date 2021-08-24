import React from 'react';
import firebase from 'firebase';
import './Authentication';
export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (event) => {
    event.preventDefault();
    firebase.auth().signOut();
  }
  render(){
    return (
      <div>
        <center>
          <h2>Welcome user</h2>
          <p></p>
          <input type="submit" onClick={this.handleClick} name="submit" value="signOut" />
        </center>
      </div>
    );
  }
}
