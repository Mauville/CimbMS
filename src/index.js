import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import firebase from "firebase";
// require("firebase/auth");
// require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBzFNI1lwCcREBn3lV2_GXLscTbT6owcjE",
  authDomain: "cimb-59410.firebaseapp.com",
  projectId: "cimb-59410",
  storageBucket: "cimb-59410.appspot.com",
  messagingSenderId: "860663778751",
  appId: "1:860663778751:web:12f4a25216ef7ba4d5650a",
  measurementId: "G-8S23NF4M7L",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
