import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Login from './login/login';
import useToken from './use-token/use-token';
import { useNavigate  } from "react-router-dom";

const StyledApp = styled.div`
  padding: 20px;
`;

export function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  const logoutHandler = () => {
    setToken('');
  }

  return (
    <StyledApp>
      <div className="wrapper">
        <h1>Application</h1>
        <button onClick={logoutHandler}>Logout!</button>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Dashboard />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/logout" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StyledApp>
  );
}

export default App;
