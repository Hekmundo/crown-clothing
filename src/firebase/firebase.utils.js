import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBSCgStdsGcbGHHhNqwiHXZTdF5vfdN6P4',
  authDomain: 'crown-clothing-db-850a2.firebaseapp.com',
  projectId: 'crown-clothing-db-850a2',
  storageBucket: 'crown-clothing-db-850a2.appspot.com',
  messagingSenderId: '834723752691',
  appId: '1:834723752691:web:889538b3ba8f3620a0e586',
  measurementId: 'G-23QSVWJCCR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
