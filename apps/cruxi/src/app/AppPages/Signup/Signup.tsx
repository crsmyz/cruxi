import React, { useState } from 'react';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { InputGroup, Form, Button, AuthSplashScreen } from '@cruxi/cruxi-ui'
import { StyledUtilLink } from './StyledSignup';
import { APP_NAME } from '../../Constants/AppConstants';

const Signup: React.FC = () => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const { signup }: any = useAuth();
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

  const backgroundImageURL = './../../assets/images/mountain2.jpg';
  const cardHeader = 'Sign Up';
  const cardClipPath = '7% 13%, 52% 0%, 104% 16%, 89% 49%, 96% 50%, 104% 99%, 52% 92%, 16% 99%, -3% 90%, 6% 62%, 0% 41%, 5% 23%';
  const bodyContent = (
    <>
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
        <StyledUtilLink>
          <Button buttonName="Sign Up" />
        </StyledUtilLink>
      </Form>
      <StyledUtilLink>
        Already have an account?
        <Link to="/login">Log In</Link>
      </StyledUtilLink>
    </>
  );

  return (
      <AuthSplashScreen
      backgroundImage={backgroundImageURL}
      clipPath={cardClipPath}
      appNameHeader={APP_NAME}
      cardHeader={cardHeader}
      bodyContent={bodyContent}
    />
  );
};

export default Signup;
