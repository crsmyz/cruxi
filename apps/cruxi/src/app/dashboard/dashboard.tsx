import React, { useState } from 'react';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import { StyledDashboard } from './StyledDashboard';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Dashboard = (props: DashboardProps) => {
  const [workout, setWorkout] = useState();
  const { user } = useAuth0();
  return (
    <StyledDashboard>
      <h2>Log Workout</h2>
      <div>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
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
