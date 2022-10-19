import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ClimbingLogProps {}

const StyledClimbingLog = styled.div`
  color: pink;
`;

export function ClimbingLog(props: ClimbingLogProps) {
  return (
    <StyledClimbingLog>
      <h1>Welcome to ClimbingLog!</h1>
    </StyledClimbingLog>
  );
}

export default ClimbingLog;
