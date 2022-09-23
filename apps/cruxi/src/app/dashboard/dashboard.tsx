import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DashboardProps {}

const StyledDashboard = styled.div`
  color: pink;
`;

export function Dashboard(props: DashboardProps) {
  return (
    <StyledDashboard>
      <h1>Welcome to Dashboard!</h1>
      Climbing stuff here!
    </StyledDashboard>
  );
}

export default Dashboard;
