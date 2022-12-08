import React, { useContext, useState, useEffect } from 'react';
import { auth } from './../Firebase';

const AuthContext = React.createContext<any>('');

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => {
    return auth.signOut();
  }

  const resetPassword = (email: string) => {
    return auth.sendPasswordResetEmail(email);
  }

  const updateEmail = (email: string) => {
    return currentUser.updateEmail(email);
  }

  const updatePassword = (password: string) => {
    return currentUser.updatePassword(password);
  }

  const updatePhoneNumber = (phoneNumber: any) => {
  //   // const cred = firebase.auth.PhoneAuthProvider.credential(id, code);
  //   return currentUser.updatePhoneNumber(phoneNumber);
  }

  const updateDisplayName = () => {
    return currentUser.updatePassword();
  }

  const updateProfile = (displayName?: string, profilePicture?: string) => {
    return currentUser.updateProfile({ displayName: displayName, photoURL: profilePicture });
  }

  useEffect(() => {
    // auth.
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    // updatePhoneNumber,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}