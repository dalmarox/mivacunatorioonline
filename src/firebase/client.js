import {initializeApp} from "firebase/app"

import {getFirestore} from 'firebase/firestore'

 

const firebaseConfig = {
  apiKey: "AIzaSyBV2nlLKkCZUTFb7voayiCuvLJcmpY6fTk",
  authDomain: "farma-educativa-app.firebaseapp.com",
  projectId: "farma-educativa-app",
  storageBucket: "farma-educativa-app.appspot.com",
  messagingSenderId: "236608142252",
  appId: "1:236608142252:web:46d62b85824c38c4df5809"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);