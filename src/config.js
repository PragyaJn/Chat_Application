import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBjyL7Pryfa_5oByruvH_T2jSNRgjm4ows",
    authDomain: "messenger-b11f9.firebaseapp.com",
    projectId: "messenger-b11f9",
    storageBucket: "messenger-b11f9.appspot.com",
    messagingSenderId: "873480834146",
    appId: "1:873480834146:web:eca0a22df14abd1195d53b",
    
    measurementId: "G-99BLK7G9JX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();
  const db = firebase.firestore();
  export {auth,db};