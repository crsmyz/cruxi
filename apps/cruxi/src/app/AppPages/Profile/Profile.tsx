import React, { useState, useRef } from "react";
// interfaces
import { ProfileProps } from './ProfileProps.interface';
// styles
import { StyledProfile } from './StyledProfile';

import { useAuth } from "../../Context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Profile = (props: ProfileProps) => {
  const emailRef = useRef<any>()
  const passwordRef = useRef<any>()
  const passwordConfirmRef = useRef<any>()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e: any) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }



  return (
    <StyledProfile>
          <>
      <div>
        <div>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <div>{error}</div>}
          <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
              <label>Password</label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
              <label>Password Confirmation</label>
              <input
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            <button disabled={loading} className="w-100" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </>

    </StyledProfile>
  );
}

export default Profile;
