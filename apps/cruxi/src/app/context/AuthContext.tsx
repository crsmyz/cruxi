import React, { useContext, useState, useEffect } from "react"
import { auth } from "./../Firebase"

const AuthContext = React.createContext<any>('')

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children}: any) {
  const [currentUser, setCurrentUser] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)

  function signup(email: any, password: any) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email: any, password: any) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email: any) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email: any) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password: any) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
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