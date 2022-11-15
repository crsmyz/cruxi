import { environment } from '../environments/environment';
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firbase vars
const firebaseApp: any = firebase.initializeApp({
    apiKey: "AIzaSyCdiSsrxfgKjyCTtPTA_42IBaWRk-lUQ_o",
    authDomain: "cruxi-dev.firebaseapp.com",
    projectId: "cruxi-dev",
    storageBucket: "cruxi-dev.appspot.com",
    messagingSenderId: "254107916944",
    appId: "1:254107916944:web:238c4942fe2003f90b1615"
  });
export const auth: any = firebaseApp.auth();
export const firestore: any = firebase.firestore();