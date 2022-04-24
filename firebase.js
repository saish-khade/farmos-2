// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAt9VKqfmatyXLZzaeQbhofkKfvgjELMt4",
//   authDomain: "fir-auth-144d8.firebaseapp.com",
//   projectId: "fir-auth-144d8",
//   storageBucket: "fir-auth-144d8.appspot.com",
//   messagingSenderId: "494534691505",
//   appId: "1:494534691505:web:f8a8991157d8053a777090"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBmYYC7wQpqMc0uzdJI2STQRgKh9GJlG4Q",
  authDomain: "farmos-3a851.firebaseapp.com",
  projectId: "farmos-3a851",
  storageBucket: "farmos-3a851.appspot.com",
  messagingSenderId: "384941430575",
  appId: "1:384941430575:web:c2f8d3300cd53643ad73da"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };