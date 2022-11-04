import React, { useState } from 'react';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import { StyledDashboard } from './StyledDashboard';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogWorkout from '../LogWorkout/LogWorkout';

const Dashboard = (props: DashboardProps) => {
  const [workout, setWorkout] = useState();
  const [workOutHistory, setWorkoutHistory] = useState([]);


  const { user } = useAuth0();
  return (
    <StyledDashboard>
      <LogWorkout workOutData={workOutHistory} setWorkOutHandler={setWorkoutHistory}/>
      <h2>Workout History</h2>
      <div>
        {workOutHistory.map((workout: any) => (
          <div>
            {/* {workout.date}
            {workout.activity}
            {workout.routeType}
            {workout.holdTypes}
            {workout.grade}
            {workout.intensity}
            {workout.notes} */}

            date: date,
            startTime: startTime,
            endTime: endTime,

            climbingGym: climbingGym,
            location: location,

            activity: activity,
            totalRoutes: totalRoutes,
            routesAttempted: routesAttempted,
            routesCompleted: routesCompleted,
            maxDifficulty: maxDifficulty,
            avgDifficulty: avgDifficulty,
            easiestDifficulty: easiestDifficulty,
            notes: notes,

            shoes: shoes,
            chalk: chalk,
            harness: harness,
            rope: rope,
            quickDraw: quickDraw,

            grade: grade,
            outcome: outcome,
            intensity: intensity,
            routeType: routeType,
            holdTypes: holdTypes,

            routes: routes,
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
