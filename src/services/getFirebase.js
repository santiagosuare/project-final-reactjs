import firebase from "firebase/app";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDhU_O11_wffkVaHmTg1pEokxvnJNZcPfE",
    authDomain: "santiagosuarez-react-coder.firebaseapp.com",
    projectId: "santiagosuarez-react-coder",
    storageBucket: "santiagosuarez-react-coder.appspot.com",
    messagingSenderId: "540576783383",
    appId: "1:540576783383:web:db638e81c4e2ef35ae5052"
};
  

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
    return firebase.firestore(app);
}