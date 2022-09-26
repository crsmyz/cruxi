import styled from 'styled-components';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

/* eslint-disable-next-line */
export interface DashboardProps {}

const StyledDashboard = styled.div`
  color: pink;
`;

export function Dashboard(props: DashboardProps) {
  const { user } = useAuth0();
  return (
    <StyledDashboard>
      <h1>Welcome to Dashboard!</h1>
      Climbing stuff here!
      <div>{user?.picture}</div>
      <div>{user?.name}</div>
      <div>{JSON.stringify(user, null, 2)}</div>
    </StyledDashboard>
  );
}

// export default Dashboard;

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>loading</div>,
});
