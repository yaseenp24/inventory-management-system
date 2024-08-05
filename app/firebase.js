// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA14sZhngQ0w0Dp77pbdr0A0Vy9fquyNe0",
  authDomain: "inventory-management-e3eec.firebaseapp.com",
  projectId: "inventory-management-e3eec",
  storageBucket: "inventory-management-e3eec.appspot.com",
  messagingSenderId: "1078733579696",
  appId: "1:1078733579696:web:39db20911024a25b552275",
  measurementId: "G-LWWB68BYPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}