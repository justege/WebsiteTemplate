// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-y96Ms0siGl49ZiNQwiKtmGWL-KGQ7qA",
    authDomain: "dentlio-424f4.firebaseapp.com",
    projectId: "dentlio-424f4",
    storageBucket: "dentlio-424f4.appspot.com",
    messagingSenderId: "797106718510",
    appId: "1:797106718510:web:0de7d4be8e413a36b2dcbf",
    measurementId: "G-XFNHCZMJ2S"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);