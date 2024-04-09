
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8TiOeQUPCPS5mJC63kvds27M8GBDooeg",
  authDomain: "foodlist-f481c.firebaseapp.com",
  databaseURL: "https://foodlist-f481c-default-rtdb.firebaseio.com",
  projectId: "foodlist-f481c",
  storageBucket: "foodlist-f481c.appspot.com",
  messagingSenderId: "13224448091",
  appId: "1:13224448091:web:42b6b5287f9e54f1736f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getDB = getDatabase(app);
export default getDB;
