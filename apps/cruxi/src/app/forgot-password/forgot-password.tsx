import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ForgotPasswordProps {}

const StyledForgotPassword = styled.div`
  color: pink;
`;

export function ForgotPassword(props: ForgotPasswordProps) {
  return (
    <StyledForgotPassword>
      <h1>Welcome to ForgotPassword!</h1>
    </StyledForgotPassword>
  );
}

export default ForgotPassword;
