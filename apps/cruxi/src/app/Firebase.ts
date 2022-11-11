import { environment } from '../environments/environment';
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firbase vars
const firebaseApp: any = firebase.initializeApp(environment);

export const auth: any = firebaseApp.auth();
export const firestore: any = firebase.firestore();