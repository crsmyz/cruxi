import React, { useState } from 'react';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';

import {
  StyledLogin,
  StyledCard,
  StyledUtilLink,
  HeaderAppName,
  StyledNavBrand,
  StyledAuthPages,
} from './StyledLogin';

import Form from '../components/Form/Form';
import Button from '../components/Button/Button';
import InputGroup from '../components/Input/Input';

import { APP_NAME } from '../Constants/AppConstants';

const Login: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { login } = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  return (
    <StyledAuthPages>
      <StyledLogin>
        <StyledCard>
          <StyledNavBrand>
            <HeaderAppName>{APP_NAME}</HeaderAppName>
          </StyledNavBrand>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <div>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <InputGroup
              htmlFor="email"
              labelName="Email:"
              type="text"
              onChangeHandler={setEmail}
            />
            <InputGroup
              htmlFor="password"
              labelName="Password:"
              type="text"
              onChangeHandler={setPassword}
            />
            <StyledUtilLink>
              <Link to="/forgot-password">Forgot Password?</Link>
            </StyledUtilLink>
            <Button buttonName="Log In" />
          </Form>
          <StyledUtilLink>
            Need an account? <Link to="/signup">Sign Up</Link>
          </StyledUtilLink>
        </StyledCard>
      </StyledLogin>
    </StyledAuthPages>
  );
}

export default Login;