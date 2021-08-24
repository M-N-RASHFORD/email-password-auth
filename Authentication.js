import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBTiVsjawoEs1Q2woQpyh5Err6jnBGhlyU",
    authDomain: "myprojecti0.firebaseapp.com",
    databaseURL: "https://myprojecti0-default-rtdb.firebaseio.com",
    projectId: "myprojecti0",
    storageBucket: "myprojecti0.appspot.com",
    messagingSenderId: "349837303178",
    appId: "1:349837303178:web:0167cec21ac633de8ffc73",
    measurementId: "G-8YTTPYK6L8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const auth = firebase.auth();
