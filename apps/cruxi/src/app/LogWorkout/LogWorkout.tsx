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
const StyledTableHeaderRow = styled.tr`
`;
const StyledTableHeader = styled.td`
  padding: 0rem 2rem 1rem 0rem;
  color: #3D3837;
  font-weight: 500;
  font-size: 1.125rem;
`;
const StyledWorkoutRow = styled.div`
  display: flex;
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

  const holdsDropdownData = [
    { value: '', label: 'Choose Holds...' },
    { value: 'crimps', label: 'Crimps' },
    { value: 'slopers', label: 'Slopers' },
    { value: 'jugs', label: 'Jugs' },
    { value: 'mixed', label: 'Mixed' },
  ];
  const activityDreopdownData = [
    { value: '', label: 'Choose an activity'},
    { value: 'sportClimbing', label: 'Sport Climbing'},
    { value: 'bouldering', label: 'Bouldering'},
  ];
  const routeDreopdownData = [
    { value: '', label: 'Choose a route'},
    { value: 'overhanging', label: 'Overhanging'},
    { value: 'caveRoof', label: 'Cave/Roof'},
    { value: 'slab', label: 'Slab'},
    { value: 'vertical', label: 'Vertical'},
  ];
  const shoesDropdownData = [
    { value: '', label: 'Choose a shoe...' },
    { value: 'laSportivaSkwama', label: 'La Sportiva Skwama' },
    { value: 'scarpaMaestro', label: 'Scarpa Maestro' },
  ];
  const outcomeDropdownData = [
    { value: '', label: 'Climbing Outcome...' },
    { value: 'sent', label: 'Sent' },
    { value: 'attemped', label: 'Attemped' },
  ]

  const routeTable = (<table>
    <StyledTableHeaderRow>
      <StyledTableHeader>Route #</StyledTableHeader>
      <StyledTableHeader>Grade</StyledTableHeader>
      <StyledTableHeader>Outcome</StyledTableHeader>
      <StyledTableHeader>Intensity</StyledTableHeader>
      <StyledTableHeader>Route Type</StyledTableHeader>
      <StyledTableHeader>Hold Type</StyledTableHeader>
    </StyledTableHeaderRow>
    {routes.map((eachRoute: any) => (
    <tr>
      <td>{eachRoute.routeNumber}</td>
      <td>{eachRoute.grade}</td>
      <td>{eachRoute.outcome}</td>
      <td>{eachRoute.intensity}</td>
      <td>{eachRoute.routeType}</td>
      <td>{eachRoute.holdTypes}</td>
    </tr>
    ))}
  </table>);

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
          <h3>Climbing Time</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='date' labelName='Date:' type='date' onChangeHandler={setDate}/>
            <InputGroup htmlFor='time' labelName='Start Time:' type='time' onChangeHandler={setDate}/>
            <InputGroup htmlFor='time' labelName='End Time:' type='time' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          <br/>
          <h3>Location</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='gymName' labelName='Climbing Gym:' type='text' onChangeHandler={setDate}/>
            <InputGroup htmlFor='gymLocation' labelName='Location:' type='text' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          <br/>
          <h3>Session Data</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='totalRoutes' labelName='Total Routes:' type='number' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='routesAttempted' labelName='Routes Attempted:' type='number' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='routesCompleted' labelName='Routes Completed:' type='number' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='maxDifficulty' labelName='Max Difficulty:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='avgDifficulty' labelName='Avg Difficulty:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='easiestDifficulty' labelName='Easiest Difficulty:' type='text' onChangeHandler={setDate}/>
            <br/>
            <Textarea htmlFor='notes' labelName='Notes:' onChangeHandler={setNotes}/>
          </StyledWorkoutRow>
          <br/>
          <h3>Gear</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='shoes' labelName='Shoes:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='chalk' labelName='Chalk:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='harness' labelName='Harness:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='rope' labelName='Rope:' type='text' onChangeHandler={setDate}/>
            <br/>
            <InputGroup htmlFor='quickDraws' labelName='Quick Draws:' type='text' onChangeHandler={setDate}/>
          </StyledWorkoutRow>
          {/* <br/>
          <InputGroup htmlFor='cams' labelName='Cams:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='nuts' labelName='Nuts:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='hexes' labelName='Hexes:' type='text' onChangeHandler={setDate}/> */}
          <br/>
          <h3>Add Climbs</h3>
          <StyledWorkoutRow>
            <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
            <br/>
            <Dropdown htmlFor='outcome' labelName='Outcome:' selectName='outcome' selectId='outcome-select' onChangeHandler={setOutcome} options={outcomeDropdownData} />
            <br/>
            <InputGroup htmlFor='intensity' labelName='Intensity:' type='range' min='0' max='10' step='1' name='intensity' onChangeHandler={setIntensity}/>
            <br/>
            <Dropdown htmlFor='route-select' labelName='Type of Route:' selectName='routes' selectId='route-select' onChangeHandler={setRouteType} options={routeDreopdownData} />
            <br/>
            <Dropdown htmlFor='holds-select' labelName='Hold Type:' selectName='holds' selectId='holds-select' onChangeHandler={setHoldTypes} options={holdsDropdownData} />
            <br/>
            <Button buttonName='Add Route' buttonClickHandler={saveRouteHandler} />
          </StyledWorkoutRow>
          <br/>
          <br/>
          <br/>
          {routes && routes.length > 0 && Object.keys(routes[0]).length > 0 ? routeTable : null}
          <br/>
          <br/>
          <br/>
          <br/>
          <Button buttonName='Submit Workout' />
        </Form>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
