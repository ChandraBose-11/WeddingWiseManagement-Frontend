// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.evn.VITE_FIREBASE_API_KEY,
  authDomain: "wedding-wise.firebaseapp.com",
  projectId: "wedding-wise",
  storageBucket: "wedding-wise.appspot.com",
  messagingSenderId: "144601244350",
  appId: "1:144601244350:web:c4effd66d43a338aca34ef"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);