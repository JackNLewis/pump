// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ5c9JafjELDXtH7X4jebtsQftDzqhLxA",
  authDomain: "pump-3bc8f.firebaseapp.com",
  projectId: "pump-3bc8f",
  storageBucket: "pump-3bc8f.firebasestorage.app", 
  messagingSenderId: "592332387149",
  appId: "1:592332387149:web:ee05900da5251666163d04",
  measurementId: "G-J35XVP9P76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    //  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);


export { auth, db, storage};


