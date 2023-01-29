import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTRfc7LFgGK18BRQt1cARnd4O0IOtG2y4",
  authDomain: "react-components-demo-63088.firebaseapp.com",
  projectId: "react-components-demo-63088",
  storageBucket: "react-components-demo-63088.appspot.com",
  messagingSenderId: "965558742688",
  appId: "1:965558742688:web:1006ceabda626b4a45a3c5",
};

// init firebase
initializeApp(firebaseConfig);

//init firestore

const db = getFirestore();

export { db };
