import { environment } from '../environments/environment';
// firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { getDatabase, Database } from 'firebase/database';

// firbase vars
console.log(JSON.stringify(environment.firebaseConfig));
const firebaseApp: firebase.app.App = firebase.initializeApp(
  environment.firebaseConfig
);

const firebaseDB: Database = getDatabase();
export const auth: firebase.auth.Auth = firebaseApp.auth();
export const firestore: firebase.firestore.Firestore = firebase.firestore();
// ***WRITE to firestore
export const writeWorkoutDataToDB = (userId: string, workOutData: any) => {
  addDoc(collection(firestore, 'workouts'), workOutData);
};
export const writeBoulderingProfile = (boulderingProfileData: any) => {
  addDoc(collection(firestore, 'boulderingProfile'), boulderingProfileData);
};
export const writeRopeProfile = (userId: string, ropeProfileData: any) => {
  addDoc(collection(firestore, 'ropeProfile'), ropeProfileData);
};
// ***READ functions to firestore
// GET workoutData
export const readWorkoutDataFromDB = async (
  initWorkoutState: any,
  user?: any
) => {
  const snapshot = await firestore
    .collection('workouts')
    .where('userId', '==', user?.uid)
    .get();
  initWorkoutState(mapDBSnapShot(snapshot));
};
// GET boulderingProfile
export const readBoulderingProfileDataFromDB = async (
  initWorkoutState: any,
  user?: any,
  dropdownState?: any,
  setBouderingValuesFromServerToUI?: any
) => {
  const snapshot = await firestore
    .collection('boulderingProfile')
    .where('userId', '==', user?.uid)
    .get();
  const data: any = mapDBSnapShot(snapshot).sort((a: any, b: any) => {
    return b.timestamp - a.timestamp;
  })[0];
  initWorkoutState(data);
  dropdownState && dropdownState(data?.defaultGradingSys);
  setBouderingValuesFromServerToUI && setBouderingValuesFromServerToUI(data);
};
// GET: ropeProfile
export const readRopeProfileDataFromDB = async (
  initWorkoutState: any,
  user?: any,
  dropdownState?: any,
  setRopeValuesFromServerToUI?: any
) => {
  const snapshot = await firestore
    .collection('ropeProfile')
    .where('userId', '==', user?.uid)
    .get();
  const data: any = mapDBSnapShot(snapshot).sort((a: any, b: any) => {
    return b.timestamp - a.timestamp;
  })[0];
  initWorkoutState(data);
  dropdownState && dropdownState(data.ropeDefaultGradingSys);
  setRopeValuesFromServerToUI && setRopeValuesFromServerToUI(data);
};
// utility functions
const mapDBSnapShot = (snapshot: any) => {
  return snapshot.docs.map((doc: any) => {
    return { ...doc.data(), docId: doc.id };
  });
};
