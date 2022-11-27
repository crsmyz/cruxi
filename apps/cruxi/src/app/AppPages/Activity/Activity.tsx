
import { Link, useNavigate, useParams, useLocation } from "react-router-dom"
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ActivityProps {}

const StyledActivity = styled.div`
  color: #3D3837;
  margin: 2rem 4rem 2rem 4rem;
`;

export function Activity(props: ActivityProps) {
  const { id } = useParams();
  const { state } = useLocation();
  const { workoutData } = state;

  if (!state) return null;

  return (
    <StyledActivity>
      <h1>Activity: {id}</h1>
      <div>
            Activity Name:
            <br/>
            {workoutData.activityName}
            <br/>
            Event:
            <br/>
            {workoutData.event}
            {workoutData.gradingSystem}
            {workoutData.calories}
            {workoutData.avgHeartRate}
            {workoutData.maxHeartRate}
            {workoutData.rockType}
            {workoutData.avgAscent}
            {workoutData.maxAscent}
            {workoutData.TotalAscent}
            {workoutData.weatherConditions}
            {workoutData.helmet}
            {workoutData.overallExertion}
            {workoutData.protection}
            <br/>
            Date:
            <br/>
            {workoutData.date}
            <br/>
            Start Time:
            <br/>
            {workoutData.startTime}
            <br/>
            End Time
            <br/>
            {workoutData.endTime}
            <br/>
            Climbing Gym:
            <br/>
            {workoutData.climbingGym}
            <br/>
            Location
            <br/>
            {workoutData.location}
            <br/>
            Activity:
            <br/>
            {workoutData.activity}
            <br/>
            Total Routes:
            <br/>
            {workoutData.totalRoutes}
            <br/>
            Routes Attempted:
            <br/>
            {workoutData.routesAttempted}
            <br/>
            Routes Completed:
            <br/>
            {workoutData.routesCompleted}
            <br/>
            Max Difficulty:
            <br/>
            {workoutData.maxDifficulty}
            <br/>
            Avg Diff:
            <br/>
            {workoutData.avgDifficulty}
            <br/>
            East Diff:
            <br/>
            {workoutData.easiestDifficulty}
            <br/>
            Notes:
            <br/>
            {workoutData.notes}
            <br/>
            Shoes:
            <br/>
            {workoutData.shoes}
            <br/>
            Chalk:
            <br/>
            {workoutData.chalk}
            <br/>
            Harness:
            <br/>
            {workoutData.harness}
            <br/>
            Rope:
            <br/>
            {workoutData.rope}
            <br/>
            Quick Draw:
            <br/>
            {workoutData.quickDraw}
            <br/>
            <br/>
            {workoutData.routes.map((route: any, index: number) => (
              <div key={index}>
                <span>{index + 1}</span>
                <span>{workoutData.grade}</span>
                <span>{workoutData.outcome}</span>
                <span>{workoutData.intensity}</span>
                <span>{workoutData.routeType}</span>
                <span>{workoutData.holdTypes}</span>
                <span>{workoutData.chossRating}</span>
              </div>
            ))}
            <br/>
            <hr/>
          </div>
    </StyledActivity>
  );
}

export default Activity;
