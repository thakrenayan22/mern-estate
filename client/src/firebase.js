// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-31691.firebaseapp.com',
  projectId: 'mern-estate-31691',
  storageBucket: 'mern-estate-31691.appspot.com',
  messagingSenderId: '936340575545',
  appId: '1:936340575545:web:69bb5def497afb9e6584e8'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);