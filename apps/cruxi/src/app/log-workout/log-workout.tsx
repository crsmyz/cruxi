import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LogWorkoutProps {}

const StyledLogWorkout = styled.div`
  color: pink;
`;

export function LogWorkout(props: LogWorkoutProps) {
  return (
    <StyledLogWorkout>
      <h1>Welcome to LogWorkout!</h1>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
