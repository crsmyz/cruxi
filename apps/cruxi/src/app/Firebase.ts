import { environment } from '../environments/environment';
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { setDoc, addDoc, getDocs, doc, collection } from 'firebase/firestore';
import { getDatabase, ref, onValue, Database } from 'firebase/database';

// firbase vars
const firebaseApp: firebase.app.App = firebase.initializeApp({
    apiKey: "AIzaSyCdiSsrxfgKjyCTtPTA_42IBaWRk-lUQ_o",
    authDomain: "cruxi-dev.firebaseapp.com",
    projectId: "cruxi-dev",
    storageBucket: "cruxi-dev.appspot.com",
    messagingSenderId: "254107916944",
    appId: "1:254107916944:web:238c4942fe2003f90b1615"
  });
// const workoutRef = ref(db, 'users/' + userId + '/distance');
// onValue(workoutRef, (snapshot) => {

// })
export const auth: firebase.auth.Auth = firebaseApp.auth();
export const firestore: firebase.firestore.Firestore = firebase.firestore();
const firebaseDB: Database = getDatabase();

export const writeWorkoutDataToDB = (userId: string, workOutData: any) => {
  addDoc(collection(firestore, 'workouts'), workOutData);
}
export const readWorkoutDataFromDB = async (initWorkoutState: any) => {
  const snapshot = await getDocs(collection(firestore, 'workouts'));
  const dataArray: any[] = snapshot.docs.map((doc: any) => {
      return doc.data();
    });
    initWorkoutState(dataArray);
}
