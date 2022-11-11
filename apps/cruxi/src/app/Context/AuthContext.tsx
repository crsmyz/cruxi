import React, { useContext, useState, useEffect } from "react"
import { auth } from "./../Firebase"

const AuthContext = React.createContext<any>('');

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<any> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const signup: any = (email: any, password: any) =>{
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login: any = (email: any, password: any) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const logout = () => {
    return auth.signOut()
  }

  const resetPassword = (email: any) => {
    return auth.sendPasswordResetEmail(email)
  }

  const updateEmail = (email: any) => {
    return currentUser.updateEmail(email)
  }

  const updatePassword = (password: any) => {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const value: any = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}