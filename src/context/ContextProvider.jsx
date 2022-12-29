import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.Config";

export const AuthProvider = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user register system
  const userRegisterCreate = (email, password) => {
    console.log(email, password);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signInWithEmailAndPassword
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user catch
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
      console.log(currentUser);
    });

    return () => unSubscribe();
  }, []);

  const userInfo = { user, userRegisterCreate, loading, signInUser };

  return (
    <div>
      <AuthProvider.Provider value={userInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default ContextProvider;
