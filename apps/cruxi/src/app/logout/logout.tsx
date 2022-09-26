import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

/* eslint-disable-next-line */
export interface LogoutProps {}

const StyledLogout = styled.div`
  color: pink;
`;

export function Logout(props: LogoutProps) {
  const { logout } = useAuth0();
  return (
    <StyledLogout>
      <button
      className="btn btn-danger btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
    </StyledLogout>
  );
}

export default Logout;
