import { environment } from '../environments/environment';
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// firbase vars
const firebaseApp: unknown = firebase.initializeApp(environment);

export const auth: any = firebase.auth();
export const firestore: unknown = firebase.firestore();