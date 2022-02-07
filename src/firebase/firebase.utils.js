import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const config = {
  apiKey: "AIzaSyBqrq4UVa83I2C1rJZIJnWyYXQFdBFF3tw",
  authDomain: "react-db-d39ee.firebaseapp.com",
  projectId: "react-db-d39ee",
  storageBucket: "react-db-d39ee.appspot.com",
  messagingSenderId: "1043703859382",
  appId: "1:1043703859382:web:9f4e3475c16d943f5dfe17",
  measurementId: "G-6MSYLMM1T7",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
