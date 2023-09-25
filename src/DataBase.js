// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage";

// Referenced this video for button and file access:
// https://www.youtube.com/watch?v=YOAeBSCkArA

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwZIHTwjOEb62DXwjnuKziwBwWvK7AM3U",
  authDomain: "daring-wavelet-384121.firebaseapp.com",
  projectId: "daring-wavelet-384121",
  storageBucket: "daring-wavelet-384121.appspot.com",
  messagingSenderId: "306093407206",
  appId: "1:306093407206:web:73a7fe3c8fbc1fd8443427",
  measurementId: "G-FGYC54VH9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);