// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "code your Key here",
  authDomain: "sasi-8b3d0.firebaseapp.com",
  projectId: "sasi-8b3d0",
  storageBucket: "sasi-8b3d0.firebasestorage.app",
  messagingSenderId: "792456763949",
  appId: "1:792456763949:web:60d6220e7b7388fe30f6a4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage, collection, getDocs, query, where, ref, getDownloadURL };
