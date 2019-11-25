import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAo_9h6blXvLw9A8_CMFkPP8kPxXYos9T0",
  authDomain: "e-commerce-77d42.firebaseapp.com",
  databaseURL: "https://e-commerce-77d42.firebaseio.com",
  projectId: "e-commerce-77d42",
  storageBucket: "e-commerce-77d42.appspot.com",
  messagingSenderId: "747319582556",
  appId: "1:747319582556:web:26f7c4a9adf8d4b34ceb99",
  measurementId: "G-258L2M9H8N"
};
// Initialize Firebase

export const fb = firebase.initializeApp(firebaseConfig);

//   firebase.analytics();
