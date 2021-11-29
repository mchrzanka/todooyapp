//library third party.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//framework
import firebaseConfig from './firebaseConfig';

//Initialize firebase.
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
