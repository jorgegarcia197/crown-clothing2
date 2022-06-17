import { React, useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGoogle,
  createUserDocument,
  signInWitgooglehRedirect,
} from "../../utils/firebase.utils";
import SignupForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userRef = await createUserDocument(user);
  };
  return (
    <div>
      <h1>Sign in with Google</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;
