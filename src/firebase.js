import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'react-skate-shop.firebaseapp.com',
  projectId: 'react-skate-shop',
  storageBucket: 'react-skate-shop.appspot.com',
  messagingSenderId: '902579828507',
  appId: process.env.REACT_APP_FIREBASE_APIID,
});

var db = firebaseApp.firestore();
var dbe = firebaseApp.firestore();
var dbp = firebaseApp.firestore();

export { db, dbe, dbp };
