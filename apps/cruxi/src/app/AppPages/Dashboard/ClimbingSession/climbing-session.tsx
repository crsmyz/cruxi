import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClimbingSessionProps {}

const StyledClimbingSession = styled.div`
  color: pink;
`;

export function ClimbingSession(props: ClimbingSessionProps) {
  return (
    <StyledClimbingSession>
      <h1>Welcome to ClimbingSession!</h1>
    </StyledClimbingSession>
  );
}

export default ClimbingSession;
