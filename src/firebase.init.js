// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-LGHA9rEzxQW1jY5PwzS3A_V6ESiAtW8",
  authDomain: "login-system-with-custom-hooks.firebaseapp.com",
  projectId: "login-system-with-custom-hooks",
  storageBucket: "login-system-with-custom-hooks.appspot.com",
  messagingSenderId: "665020331383",
  appId: "1:665020331383:web:32c20d9d7b0f8867a5dd72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;