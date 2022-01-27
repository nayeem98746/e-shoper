import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeaFirebase = () => {
    initializeApp(firebaseConfig)
}

export default initializeaFirebase;