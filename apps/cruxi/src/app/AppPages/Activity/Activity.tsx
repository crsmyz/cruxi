
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ActivityProps {}

const StyledActivity = styled.div`
  color: #3D3837;
  margin: 2rem 4rem 2rem 4rem;
`;

export function Activity(props: ActivityProps) {
  const { id } = useParams();

  return (
    <StyledActivity>
      <h1>Activity: {id}</h1>
      
    </StyledActivity>
  );
}

// <div>
          //   Activity Name:
          //   <br/>
          //   {workout.activityName}
          //   <br/>
          //   Event:
          //   <br/>
          //   {workout.event}
          //   {workout.gradingSystem}
          //   {workout.calories}
          //   {workout.avgHeartRate}
          //   {workout.maxHeartRate}
          //   {workout.rockType}
          //   {workout.avgAscent}
          //   {workout.maxAscent}
          //   {workout.TotalAscent}
          //   {workout.weatherConditions}
          //   {workout.helmet}
          //   {workout.overallExertion}
          //   {workout.protection}
          //   <br/>
          //   Date:
          //   <br/>
          //   {workout.date}
          //   <br/>
          //   Start Time:
          //   <br/>
          //   {workout.startTime}
          //   <br/>
          //   End Time
          //   <br/>
          //   {workout.endTime}
          //   <br/>
          //   Climbing Gym:
          //   <br/>
          //   {workout.climbingGym}
          //   <br/>
          //   Location
          //   <br/>
          //   {workout.location}
          //   <br/>
          //   Activity:
          //   <br/>
          //   {workout.activity}
          //   <br/>
          //   Total Routes:
          //   <br/>
          //   {workout.totalRoutes}
          //   <br/>
          //   Routes Attempted:
          //   <br/>
          //   {workout.routesAttempted}
          //   <br/>
          //   Routes Completed:
          //   <br/>
          //   {workout.routesCompleted}
          //   <br/>
          //   Max Difficulty:
          //   <br/>
          //   {workout.maxDifficulty}
          //   <br/>
          //   Avg Diff:
          //   <br/>
          //   {workout.avgDifficulty}
          //   <br/>
          //   East Diff:
          //   <br/>
          //   {workout.easiestDifficulty}
          //   <br/>
          //   Notes:
          //   <br/>
          //   {workout.notes}
          //   <br/>
          //   Shoes:
          //   <br/>
          //   {workout.shoes}
          //   <br/>
          //   Chalk:
          //   <br/>
          //   {workout.chalk}
          //   <br/>
          //   Harness:
          //   <br/>
          //   {workout.harness}
          //   <br/>
          //   Rope:
          //   <br/>
          //   {workout.rope}
          //   <br/>
          //   Quick Draw:
          //   <br/>
          //   {workout.quickDraw}
          //   <br/>
          //   <br/>
          //   {workout.routes.map((route: any, index: number) => (
          //     <div key={index}>
          //       <span>{index + 1}</span>
          //       <span>{workout.grade}</span>
          //       <span>{workout.outcome}</span>
          //       <span>{workout.intensity}</span>
          //       <span>{workout.routeType}</span>
          //       <span>{workout.holdTypes}</span>
          //       <span>{workout.chossRating}</span>
          //     </div>
          //   ))}
          //   <br/>
          //   <hr/>
          // </div>

export default Activity;
