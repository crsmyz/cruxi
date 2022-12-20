import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { Form, Button, InputGroup, AuthSplashScreen } from '@cruxi/cruxi-ui';
import { StyledUtilLink } from './StyledForgotPassword';
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

  const backgroundImageURL = './../../assets/images/cape.jpg';
  const cardHeader = 'Reset Password';
  const cardClipPath = '100% -8%,78% 16%,95% 42%,100% 82%,81% 107%,60% 112%,-6% 92%,4% 74%,0% 40%,12% 24%, 5% 9%';
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
        <Button buttonName="Reset Password" />
      </Form>
      <StyledUtilLink>
        <Link to="/login">Login</Link>
      </StyledUtilLink>
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

export default ForgotPassword;
