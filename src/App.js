import React, { Component } from 'react';
import Routers from './Route';
import {Provider} from 'react-redux';
import store from './store';
import firebase from "firebase";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKAyfGPTLgm5LsoKiMtkZjFS2oCF0B8Lg",
    authDomain: "sokhaypaindayapp.firebaseapp.com",
    databaseURL: "https://sokhaypaindayapp.firebaseio.com",
    projectId: "sokhaypaindayapp",
    storageBucket: "sokhaypaindayapp.appspot.com",
    messagingSenderId: "861158007252",
    appId: "1:861158007252:web:0c07e91188808ad91af641",
    measurementId: "G-BY3VS8C6SK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routers />
      </Provider>
    );
  }
}

export default App;
