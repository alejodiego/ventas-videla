import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0IJH3Sk5BIWLdPVTlzwu-auDBXuMbT2g",
  authDomain: "ventas-videla.firebaseapp.com",
  projectId: "ventas-videla",
  storageBucket: "ventas-videla.appspot.com",
  messagingSenderId: "170675231405",
  appId: "1:170675231405:web:ad40e88535172803f2c424"
};


const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);