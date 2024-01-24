// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTt77AOy1rnGPnxcEDwOVB6-9pei0roDU",
  authDomain: "pruebatecnica2024-db51c.firebaseapp.com",
  projectId: "pruebatecnica2024-db51c",
  storageBucket: "pruebatecnica2024-db51c.appspot.com",
  messagingSenderId: "913862439198",
  appId: "1:913862439198:web:73da852af0e7fa9c81190f",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;

//Dejo intencionalmente las credenciales de forma visible, entiendo que no seria lo correcto.
