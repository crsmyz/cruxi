import React, { useEffect, useState } from 'react';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import { StyledGridContainer, StyledGridItem1, StyledGridItem2, StyledGridItem3,
  StyledDashboard, StyledMetaData, StyledMetaName, StyledMetaDate, StyledMetaLocation, StyledH2, StyledCardBody, StyledCardStat, StyledH4, StyledCardStatGroup, StyledDashboardLayout } from './StyledDashboard';
import LogWorkout from '../LogWorkout/LogWorkout';

import { useAuth } from "../../Context/AuthContext"
import { Link, useNavigate, useParams } from "react-router-dom"

import { readWorkoutDataFromDB } from './../../Firebase';

import Card from './../../components/Card/Card';

import Button from '../../components/Button/Button';

const Dashboard = (props: DashboardProps) => {
  const [workout, setWorkout] = useState();
  const [workOutHistory, setWorkoutHistory] = useState<any>([]);

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  useEffect( () => {
    const list: any[] = [];
    readWorkoutDataFromDB(setWorkoutHistory);
  }, [])

  async function handleLogout() {
    setError("")

    try {
      await logout()
      navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <StyledDashboard>
      {/* <LogWorkout workOutData={workOutHistory} setWorkOutHandler={setWorkoutHistory}/> */}
      <h1>Climbing Dashboard</h1>
      <StyledGridContainer>
        <StyledGridItem1>
        <Card>
          <StyledH2>Chris Medykiewicz</StyledH2>
          <StyledCardBody>
            <StyledCardStatGroup>
              <StyledH4>Hardest Onsight</StyledH4>
              <StyledCardStat>V6</StyledCardStat>
              <StyledH4>Consistent Onsight</StyledH4>
              <StyledCardStat>V5</StyledCardStat>
              <StyledH4>Easy Onsight</StyledH4>
              <StyledCardStat>V4</StyledCardStat>
              <StyledH4>Short-Term Project Grade</StyledH4>
              <StyledCardStat>V7</StyledCardStat>
              <StyledH4>Long-Term Project Grade</StyledH4>
              <StyledCardStat>V8-V9</StyledCardStat>
            </StyledCardStatGroup>
          </StyledCardBody>
        </Card>
        <Card>
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
              <br/>
              <br/>
              <Button buttonName='Manage Goals' />
            </StyledCardStatGroup>
          </StyledCardBody>
        </Card>
        </StyledGridItem1>
        <StyledGridItem2>
        <h2>Climbing Sessions</h2>
        {workOutHistory.map((workout: any) => (
                <Card>
                  <StyledMetaData>
                    <StyledMetaName>{currentUser.displayName || 'Chris Medykiewicz'}</StyledMetaName>
                    <StyledMetaDate>{workout.date}</StyledMetaDate>
                    <StyledMetaLocation>{workout.location}</StyledMetaLocation>
                  </StyledMetaData>
                  <Link to={"/activity/" + workout.docId} state={{ workoutData: workOutHistory.find((val: any) => val.docId === workout.docId)}}>
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
        <StyledGridItem3>
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
              <br/>
              <br/>
              <Button buttonName='Manage Training Plan' />
            </StyledCardStatGroup>
          </StyledCardBody>
        </Card>
        </StyledGridItem3>
        </StyledGridContainer>
    </StyledDashboard>
  );
}

export default Dashboard;