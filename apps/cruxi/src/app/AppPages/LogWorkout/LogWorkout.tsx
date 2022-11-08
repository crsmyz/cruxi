import React, {useState} from 'react';
import Form from '../components/Form/Form';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import InputGroup from '../components/Input/Input';
import Dropdown from '../components/Dropdown/Dropdown';
import Textarea from '../components/Textarea/Textarea';

export interface LogWorkoutProps {
  workOutData: any;
  setWorkOutHandler: any;
}

export interface RouteRow {
  grade: string;
  outcome: string;
  intensity: string;
  routeType: string;
  holdTypes: string;
}

const StyledLogWorkout = styled.div`
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
  // add climbs
  const [grade, setGrade] = useState('');
  const [outcome, setOutcome] = useState('');
  const [intensity, setIntensity] = useState('');
  const [routeType, setRouteType] = useState('');
  const [holdTypes, setHoldTypes] = useState('');
  // route table data
  const [routes, setRoutes] = useState(row);
  const [isEditing, setIsEditing] = useState(false);

  const saveWorkoutHandler = (e: any) => {
    e.preventDefault();
    const workOut = {
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
    };
    props.setWorkOutHandler([...props.workOutData, workOut]);
  }
  const saveRouteHandler = (e: any) => {
    e.preventDefault();
    const route = {
      grade: grade,
      outcome: outcome,
      intensity: intensity,
      routeType: routeType,
      holdTypes: holdTypes
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
      <h1>Log Workout</h1>
        <Form onSubmit={saveWorkoutHandler}>
        <StyleWorkoutSection>
          <h3>Activity</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='activityName' labelName='Activity Name:' type='text' onChangeHandler={setActivityName}/>
            <Dropdown htmlFor='activityType' labelName='Activity:' selectName='activity' selectId='activity-select' onChangeHandler={setActivity} options={activityDropdownData} />
            <Dropdown htmlFor='event' labelName='Event:' selectName='event' selectId='event-select' onChangeHandler={setEvent} options={eventDropdownData} />
            <Dropdown htmlFor='gradingSystem' labelName='Grading System:' selectName='gradingSystem' selectId='grading-system-select' onChangeHandler={setGradingSystem} options={gradingSystemDropdownData} />
          </StyledWorkoutRow>
        </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Climbing Time</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='date' labelName='Date:' type='date' onChangeHandler={setDate}/>
            <InputGroup htmlFor='time' labelName='Start Time:' type='time' onChangeHandler={setStartTime}/>
            <InputGroup htmlFor='time' labelName='End Time:' type='time' onChangeHandler={setEndTime}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Location</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='gymCragName' labelName='Climbing Gym/Crag:' type='text' onChangeHandler={setClimbingGym}/>
            <InputGroup htmlFor='address' labelName='Address:' type='text' onChangeHandler={setLocation}/>
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
            <InputGroup htmlFor='overallExertion' labelName='Overall Exertion:' type='range' min='0' max='10' step='1' name='overallExertion' onChangeHandler={setOverallExertion}/>
            {overallExertion}
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
          <h3>Gear</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='shoes' labelName='Shoes:' type='text' onChangeHandler={setShoes}/>
            <InputGroup htmlFor='chalk' labelName='Chalk:' type='text' onChangeHandler={setChalk}/>
            <InputGroup htmlFor='harness' labelName='Harness:' type='text' onChangeHandler={setHarness}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='rope' labelName='Rope:' type='text' onChangeHandler={setRope}/>
            <InputGroup htmlFor='quickDraws' labelName='Quick Draws:' type='text' onChangeHandler={setQuickDraws}/>
            <InputGroup htmlFor='protection' labelName='Protection:' type='text' onChangeHandler={setProtection}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='helmet' labelName='Helmet:' type='text' onChangeHandler={setHelmet}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Add Climbs</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
            <Dropdown htmlFor='outcome' labelName='Outcome:' selectName='outcome' selectId='outcome-select' onChangeHandler={setOutcome} options={outcomeDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='chossRating' labelName='Choss Rating:' type='text' onChangeHandler={setGrade}/>
            <InputGroup htmlFor='intensity' labelName='Intensity:' type='range' min='0' max='10' step='1' name='intensity' onChangeHandler={setIntensity}/>
            {intensity}
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
          <br/>
          <Button buttonName='Submit Workout' />
        </Form>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
