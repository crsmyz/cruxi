import styled from 'styled-components';

import React, { useState } from 'react';
/* eslint-disable-next-line */
export interface LoginProps {
  setToken?: any
  setIsLoggedIn?: any;
}

const StyledLogin = styled.div`
  color: #ff6600;
`;

async function loginUser(credentials: any) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export function Login(props: LoginProps) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const userNameHandler = (e: any) => {
    setUserName(e.target.value)
  }

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    props.setToken(token);
  }

  return (
    <StyledLogin>
      <h1>Welcome to Cruxi!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={userNameHandler}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={passwordHandler}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </StyledLogin>
  );
}

export default Login;
