import React from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    const userRef = await createUserDocument(user);
  };

  return (
    <div>
      <h1>Sign in with Google</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
