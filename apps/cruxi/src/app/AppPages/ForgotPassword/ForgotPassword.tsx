import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../Context/AuthContext';

import { Form, Button, InputGroup } from '@cruxi/cruxi-ui';

import {
  StyledForgotPassword,
  StyledCard,
  StyledUtilLink,
  HeaderAppName,
  StyledNavBrand,
  StyledAuthPages,
} from './StyledForgotPassword';

import { APP_NAME } from '../../Constants/AppConstants';

const ForgotPassword: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { resetPassword } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }

  return (
    <StyledAuthPages>
      <StyledForgotPassword>
        <StyledCard>
          <StyledNavBrand>
            <HeaderAppName>{APP_NAME}</HeaderAppName>
          </StyledNavBrand>
          <h2 className="text-center mb-4">Reset Password</h2>
          {error && <div>{error}</div>}
          <Form onSubmit={handleSubmit}>
            <InputGroup
              htmlFor="email"
              labelName="Email:"
              type="text"
              onChangeHandler={setEmail}
            />
            <Button buttonName="Reset Password" />
          </Form>
          <StyledUtilLink>
            <Link to="/login">Login</Link>
          </StyledUtilLink>
          <StyledUtilLink>
            Need an account? <Link to="/signup">Sign Up</Link>
          </StyledUtilLink>
        </StyledCard>
      </StyledForgotPassword>
    </StyledAuthPages>
  );
};

export default ForgotPassword;
