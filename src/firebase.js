import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyC7KOTYQcMgdECQNIVpmEpJewN1oerw__8",
  authDomain: "starr-meal-planner.firebaseapp.com",
  databaseURL: "https://starr-meal-planner.firebaseio.com",
  projectId: "starr-meal-planner",
  storageBucket: "starr-meal-planner.appspot.com",
  messagingSenderId: "601980798403",
  appId: "1:601980798403:web:9f1f28e2094c4b60f82976",
  measurementId: "G-HDPNXJY6SD",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const databaseRef = firebase.database().ref();
const provider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(provider);
};

export const signOutOfGoogle = () => {
  firebase.auth().signOut();
};

export function sendToFirebase() {
  try {
    databaseRef.child("todos").set(Math.random());
  } catch (e) {
    console.log(e);
  }
}

export function sendNewIngredientToFirebase(name, units) {
  try {
    databaseRef.child("Ingredients").child(name).set({
      name, units
    });
  } catch (e) {
    console.log(e);
  }
}

export function removeIngredientFromFirebase(name) {
  try {
    databaseRef.child("Ingredients").child(name).remove()
  } catch(e) {
    console.log(e)
  }
}