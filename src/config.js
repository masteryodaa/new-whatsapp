import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCi1G5eS9y-bpiApYJFzN3Txj_A4MOE9hQ",
    authDomain: "new-whatsapp-d4266.firebaseapp.com",
    projectId: "new-whatsapp-d4266",
    storageBucket: "new-whatsapp-d4266.appspot.com",
    messagingSenderId: "782673236015",
    appId: "1:782673236015:web:37d57600aee54e2ac2f6da",
    measurementId: "G-X2Z7WYRX8S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();