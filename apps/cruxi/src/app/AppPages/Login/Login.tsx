import React, { useState } from 'react';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { StyledUtilLink } from './StyledLogin';
import { AuthSplashScreen, Form, Button, InputGroup } from '@cruxi/cruxi-ui';
import { APP_NAME } from '../../Constants/AppConstants';

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

  const backgroundImageURL = './../../../assets/images/flatirons.jpg';
  const cardHeader = 'Log In';
  const cardClipPath = '18% 6%, 96% -2%, 86% 28%, 106% 82%, 85% 95%, -3% 108%, 4% 64%, -13% -2%';
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
        <StyledUtilLink>
          <Link to="/forgot-password">Forgot Password?</Link>
        </StyledUtilLink>
        <Button buttonName="Log In" />
      </Form>
      <StyledUtilLink>
        Need an account? <Link to="/signup">Sign Up</Link>
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

export default Login;
