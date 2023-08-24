import Stackruit from "./stackruit"
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALRqKFNQzJQelIuSRZyigE-P2rMssmNTg",
  authDomain: "stackruit-57fa5.firebaseapp.com",
  projectId: "stackruit-57fa5",
  storageBucket: "stackruit-57fa5.appspot.com",
  messagingSenderId: "61753367507",
  appId: "1:61753367507:web:b4b584ff42f55bf9e16d26",
};

initializeApp(firebaseConfig);

export const globalDB = getFirestore();
export const auth = getAuth()

export default function Home() {

  return (
    <Stackruit />
  );
}
