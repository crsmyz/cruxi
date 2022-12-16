import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WorkoutHistoryProps {}

const StyledWorkoutHistory = styled.div`
  color: pink;
`;

export function WorkoutHistory(props: WorkoutHistoryProps) {
  return (
    <StyledWorkoutHistory>
      <h1>Welcome to WorkoutHistory!</h1>
    </StyledWorkoutHistory>
  );
}

export default WorkoutHistory;
