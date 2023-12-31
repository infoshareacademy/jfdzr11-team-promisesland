import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDLnSGDReY1lEhgSrHIR940Sq4C5JgW07A',
	authDomain: 'promises-land.firebaseapp.com',
	projectId: 'promises-land',
	storageBucket: 'promises-land.appspot.com',
	messagingSenderId: '753970973339',
	appId: '1:753970973339:web:3f27bfd975ceff3ee7943e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
