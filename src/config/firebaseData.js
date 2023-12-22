import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";     // <----- Paso extra


const firebaseConfig = {
    apiKey: "AIzaSyAOIFV6ZD_578ieb9qeDeKpeXs90TUey6o",
    authDomain: "racing-exhausts.firebaseapp.com",
    projectId: "racing-exhausts",
    storageBucket: "racing-exhausts.appspot.com",
    messagingSenderId: "611246955658",
    appId: "1:611246955658:web:91709327ac2e2980db2173"
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)    // <----- Paso extra