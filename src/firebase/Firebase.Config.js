// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const FirebaseConfig = {
//   //   apiKey: process.env.REACT_APP_apiKey,
//   //   authDomain: process.env.REACT_APP_authDomain,
//   //   projectId: process.env.REACT_APP_projectId,
//   //   storageBucket: process.env.REACT_APP_storageBucket,
//   //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   //   appId: process.env.REACT_APP_appId,

//   apiKey: "AIzaSyBYHttItsGmOOlmNvo0RW7V-vcf3Jq1Qz4",

//   authDomain: "social-application-f398b.firebaseapp.com",

//   projectId: "social-application-f398b",

//   storageBucket: "social-application-f398b.appspot.com",

//   messagingSenderId: "203734331547",

//   appId: "1:203734331547:web:0b2acd1821ec78ef62963e",
// };

// // Initialize Firebase
// const app = initializeApp(FirebaseConfig);
// const auth = getAuth(app);
// export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYHttItsGmOOlmNvo0RW7V-vcf3Jq1Qz4",
  authDomain: "social-application-f398b.firebaseapp.com",
  projectId: "social-application-f398b",
  storageBucket: "social-application-f398b.appspot.com",
  messagingSenderId: "203734331547",
  appId: "1:203734331547:web:0b2acd1821ec78ef62963e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
