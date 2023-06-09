/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [reload, setReload] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   Sign in with google
  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };

  //   Sign in with github
  const signInGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGithub);
  };

  //   Create account(register)
  const createUser = (email, password, photoURL, displayName) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        const user = result.user;
        // Update the user's profile with photoURL
        return updateProfile(user, { photoURL: photoURL }).then(() => {
          // Update the user's profile with displayName
          return updateProfile(user, { displayName: displayName }).then(() => {
            // Return the user object with updated profile
            return user;
          });
        });
      }
    );
  };

  //   Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Log out from the session
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   checking the auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    reload,
    setReload,
    user,
    loading,
    createUser,
    signIn,
    logOut,
    signInGoogle,
    signInGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
