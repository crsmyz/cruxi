import React, {useState} from 'react';
import Form from './../../components/Form/Form';
import styled from 'styled-components';
import Button from './../../components/Button/Button';
import InputGroup from './../../components/Input/Input';
import Dropdown from './../../components/Dropdown/Dropdown';
import Textarea from './../../components/Textarea/Textarea';

import { writeWorkoutDataToDB } from './../../Firebase';
import { useAuth } from '../../Context/AuthContext';

import { Link, useNavigate } from 'react-router-dom';

export interface LogWorkoutProps {}

export interface RouteRow {
  grade: string;
  outcome: string;
  intensity: string;
  routeType: string;
  holdTypes: string;
}

const StyledLogWorkout = styled.div`
  color: #3D3837;
  margin: 2rem 4rem 2rem 4rem;
`;

const StyledCard = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  background-color: #FFFFFF;
  border: 1px solid #D3C9C67A;
  border-radius: 0.35rem;
`;
const StyledRouteDataRow = styled.div`
  display: flex;
`;
const StyledRouteDataItem = styled.div`
  margin: 1rem;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
`;
const StyledTableHead = styled.thead`
  border-bottom: 1px solid #D3C9C67A;
`;
const StyledTableHeaderRow = styled.tr`
`;
const StyledTableHeader = styled.td`
  padding: 0rem 4rem 1rem 0rem;
  color: #3D3837;
  font-weight: 500;
  font-size: 1.25rem;
`;
const StyledTableCell = styled.td`
  padding: 1rem 3rem 1rem 0rem;
  color: #3D3837;
  font-weight: 400;
  font-size: 1.125rem;
`;
const StyledWorkoutRow = styled.div`
  margin: 1rem 0rem 0rem 0rem;
  display: flex;
`;
const StyleWorkoutSection = styled.section`
  padding-bottom: 2rem;
  border-bottom: 1px solid #D3C9C67A;
`;

const LogWorkout = (props: LogWorkoutProps) => {
  const row : RouteRow[] = [];

  // climbing time
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  // location
  const [climbingGym, setClimbingGym] = useState('');
  const [location, setLocation] = useState('');
  // session data
  const [activityName, setActivityName] = useState('');
  const [activity, setActivity] = useState('');
  const [event, setEvent] = useState('');
  const [gradingSystem, setGradingSystem] = useState('');
  const [calories, setCalories] = useState('');
  const [avgHeartRate, setAvgHeartRate] = useState('');
  const [maxHeartRate, setMaxHeartRate] = useState('');
  const [rockType, setRockType] = useState('');
  const [avgAscent, setAvgAscent] = useState('');
  const [maxAscent, setMaxAscent] = useState('');
  const [TotalAscent, setTotalAscent] = useState('');
  const [weatherConditions, setWeatherConditions] = useState('');
  const [helmet, setHelmet] = useState('');
  const [overallExertion, setOverallExertion] = useState('');
  const [totalRoutes, setTotalRoutes] = useState('');
  const [routesAttempted, setRoutesAttempted] = useState('');
  const [routesCompleted, setRoutesCompleted] = useState('');
  const [maxDifficulty, setMaxDifficulty] = useState('');
  const [avgDifficulty, setAvgDifficulty] = useState('');
  const [easiestDifficulty, setEasiestDifficulty] = useState('');
  const [notes, setNotes] = useState('');
  // gear
  const [shoes, setShoes] = useState('');
  const [chalk, setChalk] = useState('');
  const [harness, setHarness] = useState('');
  const [rope, setRope] = useState('');
  const [quickDraw, setQuickDraws] = useState('');
  const [protection, setProtection] = useState('');
  const [brush, setBrush] = useState('');
  // add climbs
  const [grade, setGrade] = useState('');
  const [outcome, setOutcome] = useState('');
  const [intensity, setIntensity] = useState('');
  const [routeType, setRouteType] = useState('');
  const [holdTypes, setHoldTypes] = useState('');
  const [chossRating, setChossRating] = useState('')
  const [climbColor, setClimbColor] = useState('');
  const [wallName, setWallName] = useState('');
  // route table data
  const [routes, setRoutes] = useState(row);
  const [isEditing, setIsEditing] = useState(false);
  const [webbingAndChord, setWebbingAndChord] = useState('');

  const [sessionData, setSessionData] = useState({});


  const { currentUser } = useAuth()
  const navigate = useNavigate();

  const saveWorkoutHandler = (e: any) => {
    e.preventDefault();
    const workOut = {
      date: date,
      startTime: startTime,
      endTime: endTime,
      climbingGym: climbingGym,
      location: location,
      activityName: activityName,
      activity: activity,
      event: event,
      gradingSystem: gradingSystem,
      calories: calories,
      avgHeartRate: avgHeartRate,
      maxHeartRate: maxHeartRate,
      rockType: rockType,
      avgAscent:avgAscent,
      maxAscent: maxAscent,
      TotalAscent: TotalAscent,
      weatherConditions: weatherConditions,
      helmet: helmet,
      overallExertion: overallExertion,
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
      protection: protection,
      brush: brush,
      webbingAndChord: webbingAndChord,
      grade: grade,
      outcome: outcome,
      intensity: intensity,
      routeType: routeType,
      holdTypes: holdTypes,
      routes: routes,
      isEditing: isEditing,
      sessionData: sessionData,
      chossRating: chossRating,
    };
    setSessionData(workOut);
    writeWorkoutDataToDB(currentUser.uid, { userId: currentUser.uid, ...workOut })
    try {
      navigate('/dashboard');
    } catch(error) {
      console.log(error);
    }
  }
  const saveRouteHandler = (e: any) => {
    e.preventDefault();
    const route = {
      grade: grade,
      outcome: outcome,
      intensity: intensity,
      routeType: routeType,
      holdTypes: holdTypes,
      chossRating: chossRating,
      climbColor: climbColor,
      wallName: wallName
    };
    setRoutes([...routes, route]);
  }
  const removeRouteHandler = (e: any, i: number) => {
    e.preventDefault();
    const newRoutes = routes;
    newRoutes.splice(i, 1);
    setRoutes([...newRoutes]);
  }

  const holdsDropdownData = [
    { value: '', label: 'Choose Holds...' },
    { value: 'Crimps', label: 'Crimps' },
    { value: 'Slopers', label: 'Slopers' },
    { value: 'Jugs', label: 'Jugs' },
    { value: 'Mixed', label: 'Mixed' },
  ];
  const outcomeDropdownData = [
    { value: '', label: 'Climbing Outcome...' },
    { value: 'Sent', label: 'Sent' },
    { value: 'Attempted', label: 'Attempted' },
  ];
  const activityDropdownData = [
    { value: '', label: 'Choose an activity'},
    { value: 'Auto Belay', label: 'Auto Belay'},
    { value: 'Sport Climbing', label: 'Sport Climbing'},
    { value: 'Trad Climbing', label: 'Trad Climbing'},
    { value: 'Bouldering', label: 'Bouldering'},
  ];
  const routeDreopdownData = [
    { value: '', label: 'Choose a route'},
    { value: 'Overhanging', label: 'Overhanging'},
    { value: 'Cave/Roof', label: 'Cave/Roof'},
    { value: 'Slab', label: 'Slab'},
    { value: 'Vertical', label: 'Vertical'},
  ];
  const eventDropdownData = [
    { value: '', label: 'Choose an event'},
    { value: 'Training', label: 'Training'},
    { value: 'Fitness', label: 'Fitness'},
    { value: 'Recreation/Fun', label: 'Recreation/Fun'},
    { value: 'Projecting', label: 'Projecting'},
    { value: 'Competition', label: 'Competition'},
  ];
  const gradingSystemDropdownData = [
    { value: '', label: 'Choose a grading system'},
    { value: 'V-Scale', label: 'V-Scale'},
    { value: 'Font', label: 'Font'},
    { value: 'YDS', label: 'YDS'},
  ];
  const vGradeDropdownData = [
    { value: '', label: 'Choose a V-grade'},
    { value: 'vb', label: 'VB'},
    { value: 'v0', label: 'V0'},
    { value: 'v1', label: 'V1'},
    { value: 'v2', label: 'V2'},
    { value: 'v3', label: 'V3'},
    { value: 'v4', label: 'V4'},
    { value: 'v5', label: 'V5'},
    { value: 'v6', label: 'V6'},
    { value: 'v7', label: 'V7'},
    { value: 'v8', label: 'V8'},
    { value: 'v9', label: 'V9'},
    { value: 'v1', label: 'V10'},
    { value: 'v11', label: 'V11'},
    { value: 'v12', label: 'V12'},
    { value: 'v13', label: 'V13'},
    { value: 'v14', label: 'V14'},
    { value: 'v15', label: 'V15'},
    { value: 'v16', label: 'V16'},
    { value: 'v17', label: 'V17'},
  ];
  const fontGradeDropdownData = [
    { value: '', label: 'Choose a Font Grade'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
    { value: '5', label: '5'},
    { value: '5+', label: '5+'},
    { value: '6A/+', label: '6A/+'},
    { value: '6B/+', label: '6B/+'},
    { value: '6C/+', label: '6C/+'},
    { value: '7A', label: '7A'},
    { value: '7A+', label: '7A+'},
    { value: '7B/+', label: '7B/+'},
    { value: '7C', label: '7C'},
    { value: '7C+', label: '7C+'},
    { value: '8A', label: '8A'},
    { value: '8A+', label: '8A+'},
    { value: '8B', label: '8B'},
    { value: '8B+', label: '8B+'},
    { value: '8C', label: '8C'},
    { value: '8C+', label: '8C+'},
    { value: '9A', label: '9A'},
  ];
  const ydsGradeDropdownData = [
    { value: '', label: 'Choose a Font Grade'},
    { value: '3', label: '3'},
    { value: '4', label: '4'},
    { value: '5', label: '5'},
    { value: '5+', label: '5+'},
    { value: '6A/+', label: '6A/+'},
    { value: '6B/+', label: '6B/+'},
    { value: '6C/+', label: '6C/+'},
    { value: '7A', label: '7A'},
    { value: '7A+', label: '7A+'},
    { value: '7B/+', label: '7B/+'},
    { value: '7C', label: '7C'},
    { value: '7C+', label: '7C+'},
    { value: '8A', label: '8A'},
    { value: '8A+', label: '8A+'},
    { value: '8B', label: '8B'},
    { value: '8B+', label: '8B+'},
    { value: '8C', label: '8C'},
    { value: '8C+', label: '8C+'},
    { value: '9A', label: '9A'},
  ];

  const routeTable = (<StyledTable>
    <StyledTableHead>
      <StyledTableHeaderRow>
        <StyledTableHeader>Route #</StyledTableHeader>
        <StyledTableHeader>Grade</StyledTableHeader>
        <StyledTableHeader>Outcome</StyledTableHeader>
        <StyledTableHeader>Intensity</StyledTableHeader>
        <StyledTableHeader>Route Type</StyledTableHeader>
        <StyledTableHeader>Hold Type</StyledTableHeader>
      </StyledTableHeaderRow>
    </StyledTableHead>
    {routes.map((eachRoute: any, index: number) => (
    <tr key={index}>
      {<StyledTableCell key={index}>{index + 1}</StyledTableCell>}
      <StyledTableCell key={index}>{eachRoute.grade}</StyledTableCell>
      <StyledTableCell key={index}>{eachRoute.outcome}</StyledTableCell>
      <StyledTableCell key={index}>{eachRoute.intensity}</StyledTableCell>
      <StyledTableCell key={index}>{eachRoute.routeType}</StyledTableCell>
      <StyledTableCell key={index}>{eachRoute.holdTypes}</StyledTableCell>
      <StyledTableCell key={index}><Button buttonName='Delete' buttonClickHandler={(e: any) => removeRouteHandler(e, index)} /></StyledTableCell>
    </tr>
    ))}
  </StyledTable>);
  return (
    <StyledLogWorkout>
      <h1>Log Climbing Session</h1>
        <Form onSubmit={saveWorkoutHandler}>
        <StyleWorkoutSection>
          <h3>Activity</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='activityName' labelName='Activity Name:' type='text' onChangeHandler={setActivityName}/>
            <Dropdown htmlFor='activityType' labelName='Activity:' selectName='activity' selectId='activity-select' onChangeHandler={setActivity} options={activityDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <Dropdown htmlFor='event' labelName='Event:' selectName='event' selectId='event-select' onChangeHandler={setEvent} options={eventDropdownData} />
            <Dropdown htmlFor='gradingSystem' labelName='Grading System:' selectName='gradingSystem' selectId='grading-system-select' onChangeHandler={setGradingSystem} options={gradingSystemDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='date' labelName='Date:' type='date' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          <h3>Location</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='gymCragName' labelName='Climbing Gym/Crag:' type='text' onChangeHandler={setClimbingGym}/>
            {/* <InputGroup htmlFor='address' labelName='Address:' type='text' onChangeHandler={setLocation}/> */}
          </StyledWorkoutRow>
        </StyleWorkoutSection>
        <StyleWorkoutSection>
          <h3>Add Climbs</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
            <Dropdown htmlFor='outcome' labelName='Outcome:' selectName='outcome' selectId='outcome-select' onChangeHandler={setOutcome} options={outcomeDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='chossRating' labelName='Choss Rating:' type='text' onChangeHandler={setChossRating}/>
            <InputGroup htmlFor='intensity' labelName='Intensity:' type='range' min='1' max='10' step='1' name='intensity' onChangeHandler={setIntensity} rangeNumber={intensity}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='routeTapeColor' labelName='Tape/Climb Color:' type='text' onChangeHandler={setClimbColor}/>
            <InputGroup htmlFor='wallName' labelName='Wall Name:' type='text' onChangeHandler={setWallName}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <Dropdown htmlFor='route-select' labelName='Wall Type:' selectName='routes' selectId='route-select' onChangeHandler={setRouteType} options={routeDreopdownData} />
            <Dropdown htmlFor='holds-select' labelName='Hold Type:' selectName='holds' selectId='holds-select' onChangeHandler={setHoldTypes} options={holdsDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <Button buttonName='Add Route' buttonClickHandler={saveRouteHandler} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
          {routes && routes.length > 0 && Object.keys(routes[0]).length > 0 ? routeTable : null}
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Climbing Time</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='time' labelName='Start Time:' type='time' onChangeHandler={setStartTime}/>
            <InputGroup htmlFor='time' labelName='End Time:' type='time' onChangeHandler={setEndTime}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Session Data</h3>
            <StyledWorkoutRow>
              <InputGroup htmlFor='totalRoutes' labelName='Total Routes:' type='number' onChangeHandler={setTotalRoutes}/>
              <InputGroup htmlFor='calories' labelName='Calories:' type='number' onChangeHandler={setCalories}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <InputGroup htmlFor='avgAscent' labelName='Avg Ascent (ft):' type='number' onChangeHandler={setAvgAscent}/>
              <InputGroup htmlFor='maxAscent' labelName='Max Ascent (ft):' type='number' onChangeHandler={setMaxAscent}/>
              <InputGroup htmlFor='totalAscent' labelName='Total Ascent (ft):' type='number' onChangeHandler={setTotalAscent}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
            <InputGroup htmlFor='maxDifficulty' labelName='Max Difficulty:' type='text' onChangeHandler={setMaxDifficulty}/>
            <InputGroup htmlFor='overallExertion' labelName='Overall Exertion:' type='range' min='1' max='10' step='1' name='overallExertion' onChangeHandler={setOverallExertion} rangeNumber={overallExertion}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <InputGroup htmlFor='avgHeartRate' labelName='Avg Heart Rate:' type='number' onChangeHandler={setAvgHeartRate}/>
              <InputGroup htmlFor='maxHeartRate' labelName='Max Heart Rate:' type='number' onChangeHandler={setMaxHeartRate}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <InputGroup htmlFor='rockType' labelName='Rock Type:' type='text' onChangeHandler={setRockType}/>
              <InputGroup htmlFor='weatherConditions' labelName='Weather Conditions:' type='text' onChangeHandler={setWeatherConditions}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Textarea htmlFor='notes' labelName='Notes:' onChangeHandler={setNotes}/>
            </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Climbing Gear</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='shoes' labelName='Shoes:' type='text' onChangeHandler={setShoes}/>
            <InputGroup htmlFor='chalk' labelName='Chalk:' type='text' onChangeHandler={setChalk}/>
            <InputGroup htmlFor='brush' labelName='Brush:' type='text' onChangeHandler={setBrush}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='harness' labelName='Harness:' type='text' onChangeHandler={setHarness}/>
            <InputGroup htmlFor='rope' labelName='Rope:' type='text' onChangeHandler={setRope}/>
            <InputGroup htmlFor='quickDraws' labelName='Quick Draws:' type='text' onChangeHandler={setQuickDraws}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='protection' labelName='Trad Protection:' type='text' onChangeHandler={setProtection}/>
            <InputGroup htmlFor='helmet' labelName='Helmet:' type='text' onChangeHandler={setHelmet}/>
            <InputGroup htmlFor='webbingAndChord' labelName='Webbing/Chord:' type='text' onChangeHandler={setWebbingAndChord}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <br/>
          <Button buttonName='Submit Workout' />
        </Form>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
