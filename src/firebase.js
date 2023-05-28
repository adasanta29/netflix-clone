import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-ABYNiYP6JYMDWQTKDZJJUcBZt9CUjfk",
    authDomain: "netflix-clone-d4773.firebaseapp.com",
    projectId: "netflix-clone-d4773",
    storageBucket: "netflix-clone-d4773.appspot.com",
    messagingSenderId: "199300979783",
    appId: "1:199300979783:web:e17a437b912b41d43b2562"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;