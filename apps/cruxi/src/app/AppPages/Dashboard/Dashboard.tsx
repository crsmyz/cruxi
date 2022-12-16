// react
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import {
  StyledGridContainer,
  StyledGridItem1,
  StyledGridItem2,
  StyledGridItem3,
  StyledDashboard,
  StyledMetaData,
  StyledMetaName,
  StyledMetaDate,
  StyledMetaLocation,
  StyledH2,
  StyledCardBody,
  StyledCardStat,
  StyledH4,
  StyledCardStatGroup,
  StyledDashboardLayout,
} from './StyledDashboard';
// components
import LogWorkout from '../LogWorkout/LogWorkout';
import Card from './../../Components/Card/Card';
import Button from '../../Components/Button/Button';
import { useAuth } from '../../Context/AuthContext';
import {
  readWorkoutDataFromDB,
  readBoulderingProfileDataFromDB,
  readRopeProfileDataFromDB,
} from '../../Firebase';

const Dashboard = (props: DashboardProps) => {
  const [error, setError] = useState('');
  const [workOutHistory, setWorkoutHistory] = useState<any>([]);
  // climbing profiles
  const [boulderProfile, setBoulderingProfile] = useState<any>({});
  const [ropeProfile, setRopeProfile] = useState<any>({});

  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    readWorkoutDataFromDB(setWorkoutHistory, currentUser);
    readBoulderingProfileDataFromDB(setBoulderingProfile, currentUser, null, null);
    readRopeProfileDataFromDB(setRopeProfile, currentUser, null);
  }, []);

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  const boulderingProfileSection = (
  <StyledCardStatGroup>
    <h3>Bouldering Profile</h3>
    <StyledH4>Boulder Grading System</StyledH4>
    <StyledCardStat>
    {boulderProfile?.defaultGradingSys}
    </StyledCardStat>
    <StyledH4>Hardest Redpoint</StyledH4>
    <StyledCardStat>
    {boulderProfile?.hardestRedpoint}
    </StyledCardStat>
    <StyledH4>Consistent Redpoint</StyledH4>
    <StyledCardStat>
    {boulderProfile?.consistentRedpoint}
    </StyledCardStat>
    <StyledH4>Easy Redpoint</StyledH4>
    <StyledCardStat>{boulderProfile?.easyRedpoint}</StyledCardStat>
    <StyledH4>Hardest Onsight</StyledH4>
    <StyledCardStat>{boulderProfile?.hardestOnsight}</StyledCardStat>
    <StyledH4>Consistent Onsight</StyledH4>
    <StyledCardStat>
    {boulderProfile?.consistentOnsight}
    </StyledCardStat>
    <StyledH4>Easy Onsight</StyledH4>
    <StyledCardStat>{boulderProfile?.easyOnsight}</StyledCardStat>
    <StyledH4>Short-Term Project Grade</StyledH4>
    <StyledCardStat>
    {boulderProfile?.shortTermProject}
    </StyledCardStat>
    <StyledH4>Long-Term Project Grade</StyledH4>
    <StyledCardStat>
    {boulderProfile?.longTermProject}
    </StyledCardStat>
    <Link to='/profile'>
      <Button buttonName="Edit Profile" />
    </Link>
    </StyledCardStatGroup>
  );

  const ropeProfileSection = (
    <StyledCardStatGroup>
    <h3>Ropes Profile</h3>
    <StyledH4>Rope Grading System</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeDefaultGradingSys}
    </StyledCardStat>
    <StyledH4>Consistent Redpoint</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeConsistentRedpoint}
    </StyledCardStat>
    <StyledH4>Easy Redpoint</StyledH4>
    <StyledCardStat>{ropeProfile?.ropeEasyRedpoint}</StyledCardStat>
    <StyledH4>Hardest Onsight</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeHardestOnsight}
    </StyledCardStat>
    <StyledH4>Consistent Onsight</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeConsistentOnsight}
    </StyledCardStat>
    <StyledH4>Easy Onsight</StyledH4>
    <StyledCardStat>{ropeProfile?.ropeEasyOnsight}</StyledCardStat>
    <StyledH4>Short-Term Project Grade</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeShortTermProject}
    </StyledCardStat>
    <StyledH4>Long-Term Project Grade</StyledH4>
    <StyledCardStat>
      {ropeProfile?.ropeLongTermProject}
    </StyledCardStat>
    <Link to='/profile'>
      <Button buttonName="Edit Profile" />
    </Link>
  </StyledCardStatGroup>
  );

  return (
    <StyledDashboard>
      <h1>Climbing Dashboard</h1>
      <StyledGridContainer>
        <StyledGridItem1>
          <Card>
            <StyledH2>Chris Medykiewicz</StyledH2>
            <StyledCardBody>
              {boulderProfile ? boulderingProfileSection : null}
              {ropeProfile ? ropeProfileSection : null}
            </StyledCardBody>
          </Card>
          {/* <Card>
            <StyledH2>Goals</StyledH2>
            <StyledCardBody>
              <StyledCardStatGroup>
                <StyledH4>Training Goals</StyledH4>
                <ol>
                  <li>Incorporate a V7 into training</li>
                  <li>Work on route reading</li>
                  <li>Work on technique</li>
                  <li>Work on endurance</li>
                  <li>Increase finger strength</li>
                  <li>Lose weight</li>
                  <li>Weighted pullups with 40lbs</li>
                </ol>
                <StyledH4>Climbing Goals</StyledH4>
                <ol>
                  <li>Podium a PRG Burn Series Comp</li>
                  <li>Send another V7</li>
                  <li>Climbing V8s by end of 2023</li>
                </ol>
                <br />
                <br />
                <Button buttonName="Manage Goals" />
              </StyledCardStatGroup>
            </StyledCardBody>
          </Card> */}
        </StyledGridItem1>
        <StyledGridItem2>
          <h2>Climbing Sessions</h2>
          {workOutHistory.map((workout: any, index: number) => (
            <Card key={index}>
              <StyledMetaData>
                <StyledMetaName>
                  {currentUser.displayName || 'Chris Medykiewicz'}
                </StyledMetaName>
                <StyledMetaDate>{workout.date}</StyledMetaDate>
                <StyledMetaLocation>{workout.location}</StyledMetaLocation>
              </StyledMetaData>
              <Link
                to={'/activity/' + workout.docId}
                state={{
                  workoutData: workOutHistory.find(
                    (val: any) => val.docId === workout.docId
                  ),
                }}
              >
                <h2>{workout.activityName}</h2>
              </Link>
              <h4>Event</h4>
              <StyledCardStat>{workout.event}</StyledCardStat>
              <StyledCardBody>
                <StyledCardStatGroup>
                  <h4>Total Routes</h4>
                  <StyledCardStat>{workout.totalRoutes}</StyledCardStat>
                </StyledCardStatGroup>
                <StyledCardStatGroup>
                  <h4>Max Difficulty</h4>
                  <StyledCardStat>{workout.maxDifficulty}</StyledCardStat>
                </StyledCardStatGroup>
                <StyledCardStatGroup>
                  <h4>Total Ascent</h4>
                  <StyledCardStat>{workout.TotalAscent}</StyledCardStat>
                </StyledCardStatGroup>
                <StyledCardStatGroup>
                  <h4>Calories</h4>
                  <StyledCardStat>{workout.calories}</StyledCardStat>
                </StyledCardStatGroup>
              </StyledCardBody>
            </Card>
          ))}
        </StyledGridItem2>
        {/* <StyledGridItem3>
          <Card>
            <StyledH2>Training Plan</StyledH2>
            <StyledCardBody>
              <StyledCardStatGroup>
                <StyledH4>Monday</StyledH4>
                <p>1hr Climbing Workout from coach</p>
                <StyledH4>Wednesday</StyledH4>
                <p>1hr Climbing Workout from coach</p>
                <StyledH4>Saturday</StyledH4>
                <p>9am-11am Projecting session with coach</p>
                <br />
                <br />
                <Button buttonName="Manage Training Plan" />
              </StyledCardStatGroup>
            </StyledCardBody>
          </Card>
        </StyledGridItem3> */}
      </StyledGridContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
