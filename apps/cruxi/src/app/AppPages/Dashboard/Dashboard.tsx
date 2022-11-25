import React, { useEffect, useState } from 'react';
// interfaces
import { DashboardProps } from './Dashboard.interface';
// styles
import { StyledDashboard, StyledMetaData, StyledMetaName, StyledMetaDate, StyledMetaLocation, StyledCardBody, StyledCardStat, StyledCardStatGroup } from './StyledDashboard';
import LogWorkout from '../LogWorkout/LogWorkout';

import { useAuth } from "../../Context/AuthContext"
import { Link, useNavigate, useParams } from "react-router-dom"

import { readWorkoutDataFromDB } from './../../Firebase';

import Card from './../../components/Card/Card';

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
      <h1>Workout History</h1>
      <div>
        {workOutHistory.map((workout: any) => (
                <Card>
                  <StyledMetaData>
                    <StyledMetaName>{currentUser.displayName || 'Chris Medykiewicz'}</StyledMetaName>
                    <StyledMetaDate>{workout.date}</StyledMetaDate>
                    <StyledMetaLocation>{workout.location}</StyledMetaLocation>
                  </StyledMetaData>
                  <Link to="/activity">
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
      </div>
    </StyledDashboard>
  );
}

export default Dashboard;