import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  databaseURL: "gs://nwitter-81a78.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID
};

try {
  firebase.initializeApp(firebaseConfig);
}
catch (e) {
  
}

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();
export const authService = firebase.auth();