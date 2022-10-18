import styled from 'styled-components';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

/* eslint-disable-next-line */
export interface DashboardProps {}

const StyledDashboard = styled.div`
  color: #3D3837;
  margin: 2rem;
`;

export function Dashboard(props: DashboardProps) {
  const { user } = useAuth0();
  return (
    <StyledDashboard>
      <h2>Stats</h2>
      <div>
        <h1>Bouldering</h1>
        <div>Easy Onsight: V1</div>
        <div>Medium Onsight: V1</div>
        <div>Hard Onsight: V1</div>
        <div>Easy Redpoint: V1</div>
        <div>Medium Redpoint: V1</div>
        <div>Hard Redpoint: V1</div>
      </div>
      <div>
        <h1>Sport Climbing</h1>
        <div>Easy Onsight: V1</div>
        <div>Medium Onsight: V1</div>
        <div>Hard Onsight: V1</div>
        <div>Easy Redpoint: V1</div>
        <div>Medium Redpoint: V1</div>
        <div>Hard Redpoint: V1</div>
      </div>
      <div>
        <h1>Exercises</h1>
      </div>

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
