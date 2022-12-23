
import { Link, useNavigate, useParams, useLocation } from "react-router-dom"
import styled from 'styled-components';

import { Card, Button } from '@cruxi/cruxi-ui';

/* eslint-disable-next-line */
export interface ActivityProps {}

const StyledActivity = styled.div`
  color: #3D3837;
  margin: 2rem 4rem 2rem 4rem;
`;

export const StyledCardStat = styled.div`
  margin: 0rem 1rem 0rem 0rem;
  font-size: 1.125rem;
  font-weight: 300;
`;

export const StyledCardStatGroup = styled.div`
margin: 0rem 2rem 0rem 0rem;
`;

export const StyledH4 = styled.h4`
  margin: 0.75rem 0rem 0.75rem 0rem;
`;

export const StyledSpan = styled.span`
  margin: 1rem;
`;


export function Activity(props: ActivityProps) {
  const { id } = useParams();
  const { state } = useLocation();
  const { workoutData } = state;

  if (!state) return null;

  return (
    <StyledActivity>
      <h1>Activity</h1>
      <Card>
        <Button buttonName="Edit Climb" />
        <StyledCardStatGroup>
          <StyledH4>Activity Name:</StyledH4>
          <StyledCardStat>{workoutData.activityName}</StyledCardStat>
          <StyledH4>Activity:</StyledH4>
          <StyledCardStat>{workoutData.activity}</StyledCardStat>
          <StyledH4>Event:</StyledH4>
          <StyledCardStat>{workoutData.event}</StyledCardStat>
          <StyledH4>Grading System:</StyledH4>
          <StyledCardStat>{workoutData.gradingSystem}</StyledCardStat>
        </StyledCardStatGroup>
        <StyledCardStatGroup>
          <StyledH4>List of Climbs:</StyledH4>
          <StyledCardStat>{workoutData.routes.map((route: any, index: number) => (
              <div key={index}>
                <StyledSpan>{index + 1}</StyledSpan>
                <StyledSpan>{workoutData.grade}</StyledSpan>
                <StyledSpan>{workoutData.outcome}</StyledSpan>
                <StyledSpan>{workoutData.intensity}</StyledSpan>
                <StyledSpan>{workoutData.routeType}</StyledSpan>
                <StyledSpan>{workoutData.holdTypes}</StyledSpan>
                <StyledSpan>{workoutData.chossRating}</StyledSpan>
              </div>
            ))}
            </StyledCardStat>
        </StyledCardStatGroup>
        <StyledCardStatGroup>
          <StyledH4>Date:</StyledH4>
          <StyledCardStat>{workoutData.date}</StyledCardStat>
          <StyledH4>Start Time:</StyledH4>
          <StyledCardStat>{workoutData.startTime}</StyledCardStat>
          <StyledH4>End Time:</StyledH4>
          <StyledCardStat>{workoutData.endTime}</StyledCardStat>
        </StyledCardStatGroup>
        <StyledCardStatGroup>
          <StyledH4>Total Routes</StyledH4>
          <StyledCardStat>{workoutData.totalRoutes}</StyledCardStat>
          <StyledH4>Calories</StyledH4>
          <StyledCardStat>{workoutData.calories}</StyledCardStat>
          <StyledH4>Avg Ascent</StyledH4>
          <StyledCardStat>{workoutData.avgAscent}</StyledCardStat>
          <StyledH4>Max Ascent</StyledH4>
          <StyledCardStat>{workoutData.maxAscent}</StyledCardStat>
          <StyledH4>Total Ascent</StyledH4>
          <StyledCardStat>{workoutData.TotalAscent}</StyledCardStat>
          <StyledH4>Max Difficulty</StyledH4>
          <StyledCardStat>{workoutData.maxDifficulty}</StyledCardStat>
          <StyledH4>Overall Exertion</StyledH4>
          <StyledCardStat>{workoutData.overallExertion}</StyledCardStat>
          <StyledH4>Avg Heart Rate:</StyledH4>
          <StyledCardStat>{workoutData.avgHeartRate}</StyledCardStat>
          <StyledH4>Max Heart Rate</StyledH4>
          <StyledCardStat>{workoutData.maxHeartRate}</StyledCardStat>
          <StyledH4>Rock Type</StyledH4>
          <StyledCardStat>{workoutData.rockType}</StyledCardStat>
          <StyledH4>Weather Conditions</StyledH4>
          <StyledCardStat>{workoutData.weatherConditions}</StyledCardStat>
          <StyledH4>Notes</StyledH4>
          <StyledCardStat>{workoutData.notes}</StyledCardStat>
        </StyledCardStatGroup>
        <StyledCardStatGroup>
          <StyledH4>Shoes</StyledH4>
          <StyledCardStat>{workoutData.shoes}</StyledCardStat>
          <StyledH4>Chalk</StyledH4>
          <StyledCardStat>{workoutData.chalk}</StyledCardStat>
          <StyledH4>Harness</StyledH4>
          <StyledCardStat>{workoutData.harness}</StyledCardStat>
          <StyledH4>Rope</StyledH4>
          <StyledCardStat>{workoutData.rope}</StyledCardStat>
          <StyledH4>Quick Draws</StyledH4>
          <StyledCardStat>{workoutData.quickDraws}</StyledCardStat>
          <StyledH4>Protection</StyledH4>
          <StyledCardStat>{workoutData.protection}</StyledCardStat>
          <StyledH4>Helmet</StyledH4>
          <StyledCardStat>{workoutData.helmet}</StyledCardStat>
        </StyledCardStatGroup>
          </Card>
    </StyledActivity>
  );
}

export default Activity;
