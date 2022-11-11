import React, { useState } from 'react';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import { StyledDashboard } from './StyledDashboard';
// import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogWorkout from '../LogWorkout/LogWorkout';

import { useAuth } from "../../Context2/AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Dashboard = (props: DashboardProps) => {
  const [workout, setWorkout] = useState();
  const [workOutHistory, setWorkoutHistory] = useState([]);

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }


  // const { user } = useAuth0();
  return (
    <StyledDashboard>
      <LogWorkout workOutData={workOutHistory} setWorkOutHandler={setWorkoutHistory}/>
      <h2>Workout History</h2>
      <div>
        {workOutHistory.map((workout: any) => (
          <div>
            Date:
            <br/>
            {workout.date}
            <br/>
            Start Time:
            <br/>
            {workout.startTime}
            <br/>
            End Time
            <br/>
            {workout.endTime}
            <br/>
            Climbing Gym:
            <br/>
            {workout.climbingGym}
            <br/>
            Location
            <br/>
            {workout.location}
            <br/>
            Activity:
            <br/>
            {workout.activity}
            <br/>
            Total Routes:
            <br/>
            {workout.totalRoutes}
            <br/>
            Routes Attempted:
            <br/>
            {workout.routesAttempted}
            <br/>
            Routes Completed:
            <br/>
            {workout.routesCompleted}
            <br/>
            Max Difficulty:
            <br/>
            {workout.maxDifficulty}
            <br/>
            Avg Diff:
            <br/>
            {workout.avgDifficulty}
            <br/>
            East Diff:
            <br/>
            {workout.easiestDifficulty}
            <br/>
            Notes:
            <br/>
            {workout.notes}
            <br/>
            Shoes:
            <br/>
            {workout.shoes}
            <br/>
            Chalk:
            <br/>
            {workout.chalk}
            <br/>
            Harness:
            <br/>
            {workout.harness}
            <br/>
            Rope:
            <br/>
            {workout.rope}
            <br/>
            Quick Draw:
            <br/>
            {workout.quickDraw}
            <br/>
            <br/>
            {workout.routes.map((route: any, index: number) => (
              <div key={index}>
                <span>{index + 1}</span>
                <span>{workout.grade}</span>
                <span>{workout.outcome}</span>
                <span>{workout.intensity}</span>
                <span>{workout.routeType}</span>
                <span>{workout.holdTypes}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StyledDashboard>
  );
}

// export default Dashboard;

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <div>loading</div>,
});
