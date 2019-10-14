// Imports: Dependencies
import firebase from 'firebase';
import '@firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

// Imports: Firebase Config
import firebaseConfig from '../config/config.js';

// Firebase: Initialize
const firebaseApp = firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
});

// Redux Saga Firebase: Initialize
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);

// Firebase: Counter Reference
export const counterRef = firebase.firestore().collection('counter');

// Exports
export default reduxSagaFirebase;