import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB-_qtIC8ZgaUVrZz7YEW2XMlJvV1z6tmc",
  authDomain: "netflix-8e1af.firebaseapp.com",
  databaseURL: "https://netflix-8e1af.firebaseio.com",
  projectId: "netflix-8e1af",
  storageBucket: "netflix-8e1af.appspot.com",
  messagingSenderId: "830545258078",
  appId: "1:830545258078:web:8465d6da44fdf4af48f6cf",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
