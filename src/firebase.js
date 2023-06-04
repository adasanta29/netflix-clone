import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-ABYNiYP6JYMDWQTKDZJJUcBZt9CUjfk",
    authDomain: "netflix-clone-d4773.firebaseapp.com",
    projectId: "netflix-clone-d4773",
    storageBucket: "netflix-clone-d4773.appspot.com",
    messagingSenderId: "199300979783",
    appId: "1:199300979783:web:e17a437b912b41d43b2562"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { auth, createUserWithEmailAndPassword, db} ;
