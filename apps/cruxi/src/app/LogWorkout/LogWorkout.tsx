import React, {useState} from 'react';
import Form from '../components/Form/Form';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import InputGroup from '../components/Input/Input';
import Dropdown from '../components/Dropdown/Dropdown';
import Textarea from '../components/Textarea/Textarea';

/* eslint-disable-next-line */
export interface LogWorkoutProps {
  workOutData: any;
  setWorkOutHandler: any;
}

export interface RouteRow {
  routeNumber: number;
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

  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [holdType, setHoldType] = useState('');
  const [notes, setNotes] = useState('');

  const [routeNumber, setRouteNumber] = useState(1);
  const [grade, setGrade] = useState('');
  const [outcome, setOutcome] = useState('');
  const [intensity, setIntensity] = useState('');
  const [routeType, setRouteType] = useState('');
  const [holdTypes, setHoldTypes] = useState('');

  const [routes, setRoutes] = useState(row);

  const saveWorkoutHandler = (e: any) => {
    e.preventDefault();
    const workOut = {
      date: date,
      activity: activity,
      routeType: routeType,
      holdType: holdType,
      grade: grade,
      intensity: intensity,
      notes: notes,
    };
    props.setWorkOutHandler([...props.workOutData, workOut]);
  }
  const saveRouteHandler = (e: any) => {
    e.preventDefault();
    setRouteNumber(routeNumber + 1)
    const route = {
      routeNumber: routeNumber,
      grade: grade,
      outcome: outcome,
      intensity: intensity,
      routeType: routeType,
      holdTypes: holdTypes
    };
    setRoutes([...routes, route]);
  }
  const editRouteHandler = (i: number) => {
    console.log(i);
    console.log(routes[i]);
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
  const activityDreopdownData = [
    { value: '', label: 'Choose an activity'},
    { value: 'Sport Climbing', label: 'Sport Climbing'},
    { value: 'Bouldering', label: 'Bouldering'},
  ];
  const routeDreopdownData = [
    { value: '', label: 'Choose a route'},
    { value: 'Overhanging', label: 'Overhanging'},
    { value: 'Cave/Roof', label: 'Cave/Roof'},
    { value: 'Slab', label: 'Slab'},
    { value: 'Vertical', label: 'Vertical'},
  ];
  // const shoesDropdownData = [
  //   { value: '', label: 'Choose a shoe...' },
  //   { value: 'laSportivaSkwama', label: 'La Sportiva Skwama' },
  //   { value: 'scarpaMaestro', label: 'Scarpa Maestro' },
  // ];

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
    <tr>
      <StyledTableCell>{eachRoute.routeNumber}</StyledTableCell>
      <StyledTableCell>{eachRoute.grade}</StyledTableCell>
      <StyledTableCell>{eachRoute.outcome}</StyledTableCell>
      <StyledTableCell>{eachRoute.intensity}</StyledTableCell>
      <StyledTableCell>{eachRoute.routeType}</StyledTableCell>
      <StyledTableCell>{eachRoute.holdTypes}</StyledTableCell>
      <StyledTableCell><Button buttonName='Edit' buttonClickHandler={editRouteHandler(index)} /></StyledTableCell>
    </tr>
    ))}
  </StyledTable>);

  // sections to add
  /**
   * Climbing Time
   * Total Rest
   * Total Time
   */
  return (
    <StyledLogWorkout>
      <h1>Log Workout</h1>
        <Form onSubmit=''>
          <StyleWorkoutSection>
          <h3>Climbing Time</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='date' labelName='Date:' type='date' onChangeHandler={setDate}/>
            <InputGroup htmlFor='time' labelName='Start Time:' type='time' onChangeHandler={setDate}/>
            <InputGroup htmlFor='time' labelName='End Time:' type='time' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Location</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='gymName' labelName='Climbing Gym:' type='text' onChangeHandler={setDate}/>
            <InputGroup htmlFor='gymLocation' labelName='Location:' type='text' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Session Data</h3>
            <StyledWorkoutRow>
              <InputGroup htmlFor='totalRoutes' labelName='Total Routes:' type='number' onChangeHandler={setDate}/>
              <InputGroup htmlFor='routesAttempted' labelName='Routes Attempted:' type='number' onChangeHandler={setDate}/>
              <InputGroup htmlFor='routesCompleted' labelName='Routes Completed:' type='number' onChangeHandler={setDate}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <InputGroup htmlFor='maxDifficulty' labelName='Max Difficulty:' type='text' onChangeHandler={setDate}/>
              <InputGroup htmlFor='avgDifficulty' labelName='Avg Difficulty:' type='text' onChangeHandler={setDate}/>
              <InputGroup htmlFor='easiestDifficulty' labelName='Easiest Difficulty:' type='text' onChangeHandler={setDate}/>
            </StyledWorkoutRow>
            <StyledWorkoutRow>
              <Textarea htmlFor='notes' labelName='Notes:' onChangeHandler={setNotes}/>
            </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Gear</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='shoes' labelName='Shoes:' type='text' onChangeHandler={setDate}/>
            <InputGroup htmlFor='chalk' labelName='Chalk:' type='text' onChangeHandler={setDate}/>
            <InputGroup htmlFor='harness' labelName='Harness:' type='text' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='rope' labelName='Rope:' type='text' onChangeHandler={setDate}/>
            <InputGroup htmlFor='quickDraws' labelName='Quick Draws:' type='text' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          </StyleWorkoutSection>
          <StyleWorkoutSection>
          <h3>Add Climbs</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
            <Dropdown htmlFor='outcome' labelName='Outcome:' selectName='outcome' selectId='outcome-select' onChangeHandler={setOutcome} options={outcomeDropdownData} />
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <InputGroup htmlFor='intensity' labelName='Intensity:' type='range' min='0' max='10' step='1' name='intensity' onChangeHandler={setIntensity}/>
            {intensity}
          </StyledWorkoutRow>
          <StyledWorkoutRow>
            <Dropdown htmlFor='route-select' labelName='Type of Route:' selectName='routes' selectId='route-select' onChangeHandler={setRouteType} options={routeDreopdownData} />
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
