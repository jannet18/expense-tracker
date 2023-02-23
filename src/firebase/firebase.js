
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlqGKxhT5Rz_MQT3zLz0amjiYHBXl8r1g",
  authDomain: "expense-tracker-a961d.firebaseapp.com",
  projectId: "expense-tracker-a961d",
  storageBucket: "expense-tracker-a961d.appspot.com",
  messagingSenderId: "85010225327",
  appId: "1:85010225327:web:1a5e3abaf6b6448abf1c5a",
  measurementId: "G-F0BJ8DF609"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }