import firebaseConfig from "./firebase.cofig";
import { initializeApp } from "firebase/app";



const initializeAppFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeAppFirebase