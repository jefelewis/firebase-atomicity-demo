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

// Increment/Decrement
export const atomicIncrement = firebase.firestore.FieldValue.increment(1);
export const atomicDecrement = firebase.firestore.FieldValue.increment(-1);

// Exports
export default reduxSagaFirebase;