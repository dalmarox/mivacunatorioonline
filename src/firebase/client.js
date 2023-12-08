import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYL7Un5JjpjraYQfmuwUx7-ww8zNeYcEI",
    authDomain: "mitiendaonline-190c8.firebaseapp.com",
    projectId: "mitiendaonline-190c8",
    storageBucket: "mitiendaonline-190c8.appspot.com",
    messagingSenderId: "1058532316054",
    appId: "1:1058532316054:web:78f11905647d21dc0603b7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);