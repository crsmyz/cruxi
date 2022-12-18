import React, { useState } from 'react';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';

import InputGroup from '../Components/Input/Input';
import Form from '../Components/Form/Form';
import Button from '../Components/Button/Button';

import {
  StyledAuthPages,
  StyledSignup,
  StyledCard,
  StyledNavBrand,
  HeaderAppName,
  StyledSpacingDiv,
  StyledUtilLink,
} from './StyledSignup';

import { APP_NAME } from '../Constants/AppConstants';

const Signup: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const { signup } = useAuth();
  const navigate: NavigateFunction = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== passwordConfirm) return setError('Passwords do not match');
    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <StyledAuthPages>
      <StyledSignup>
        <StyledCard>
          <StyledNavBrand>
            <HeaderAppName>{APP_NAME}</HeaderAppName>
          </StyledNavBrand>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <InputGroup
              htmlFor="confirmPassword"
              labelName="Confirm Password:"
              type="text"
              onChangeHandler={setPasswordConfirm}
            />
            <StyledSpacingDiv>
              <Button buttonName="Sign Up" />
            </StyledSpacingDiv>
          </Form>
          <StyledUtilLink>
            Already have an account?
            <Link to="/login">Log In</Link>
          </StyledUtilLink>
        </StyledCard>
      </StyledSignup>
    </StyledAuthPages>
  );
};

export default Signup;
