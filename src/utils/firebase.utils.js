// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocFromCache,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcChRERjoakN6tSehKeklBTeocljcZS6Q",
  authDomain: "crown-clothing-db-b94e8.firebaseapp.com",
  projectId: "crown-clothing-db-b94e8",
  storageBucket: "crown-clothing-db-b94e8.appspot.com",
  messagingSenderId: "578278115160",
  appId: "1:578278115160:web:6e200ae61b13c8cff7c72d",
  measurementId: "G-TG22KY1Q4C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        uid,
      });
    } catch (error) {
      console.error("Error creating user document", error.message);
    }
  }
  return userDocRef;
};
