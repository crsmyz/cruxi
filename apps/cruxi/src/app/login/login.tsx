import React, { useRef, useState } from "react"
import { useAuth } from "../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { StyledLogin, StyledCard, StyledUtilLink } from './StyledLogin';

import Form from './../components/Form/Form';
import Button from './../components/Button/Button';
import InputGroup from './../components/Input/Input';

export default function Login() {
  const emailRef: any = useRef()
  const passwordRef: any = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }

  return (
      <StyledLogin>
        <StyledCard>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <div>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <InputGroup htmlFor='email' labelName='Email:' type='text' onChangeHandler={setEmail} />
            <InputGroup htmlFor='password' labelName='Password:' type='text' onChangeHandler={setPassword} />
            <StyledUtilLink>
              <Link to="/forgot-password">Forgot Password?</Link>
            </StyledUtilLink>
            <Button buttonName='Log In' />
          </Form>
          
          <StyledUtilLink>
            Need an account? <Link to="/signup">Sign Up</Link>
          </StyledUtilLink>
        </StyledCard>
    </StyledLogin>
  )
}