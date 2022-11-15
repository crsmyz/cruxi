import React, { useRef, useState } from "react"
import { useAuth } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
  const emailRef: any = useRef()
  const passwordRef: any = useRef()
  const passwordConfirmRef: any = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e: any) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div>
        <div>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input type="email" ref={emailRef} required />
              <label>Password</label>
              <input type="password" ref={passwordRef} required />
              <label>Password Confirmation</label>
              <input type="password" ref={passwordConfirmRef} required />
            <button disabled={loading} className="w-100" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  )
}