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

const StyledLogWorkout = styled.div`
`;

const StyledCard = styled.div`
  background-color: #D3C9C67A;
  padding: 2rem;
`;
const StyledRouteDataRow = styled.div`
  display: flex;
`;
const StyledRouteDataItem = styled.div`
  margin: 1rem;
`;

const LogWorkout = (props: LogWorkoutProps) => {

  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [holdType, setHoldType] = useState('');
  const [notes, setNotes] = useState('');

  const [routeNumber, setRouteNumber] = useState('');
  const [grade, setGrade] = useState('');
  const [outcome, setOutcome] = useState('');
  const [intensity, setIntensity] = useState('');
  const [routeType, setRouteType] = useState('');
  const [holdTypes, setHoldTypes] = useState('');

  const [routes, setRoutes] = useState([{
    routeNumber: '',
    grade: '',
    outcome: '',
    intensity: '',
    routeType: '',
    holdTypes: ''
  }]);

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

  return (
    <StyledLogWorkout>
      <h2>Log Workout</h2>
      <StyledCard>
        <Form onSubmit=''>
          <h3>Climbing Time:</h3>
          <InputGroup htmlFor='date' labelName='Date:' type='date' onChangeHandler={setDate}/>
          <InputGroup htmlFor='time' labelName='Start Time:' type='time' onChangeHandler={setDate}/>
          <InputGroup htmlFor='time' labelName='End Time:' type='time' onChangeHandler={setDate}/>
          {/* Climbing Time
          Total Rest
          Total Time */}
          <br/>

          <h3>Location</h3>
          <InputGroup htmlFor='gymName' labelName='Climbing Gym:' type='text' onChangeHandler={setDate}/>
          <InputGroup htmlFor='gymLocation' labelName='Location' type='text' onChangeHandler={setDate}/>

          <h3>Session Data:</h3>
          <InputGroup htmlFor='totalRoutes' labelName='Total Routes:' type='number' onChangeHandler={setDate}/>
          {/* <Dropdown htmlFor='activity-select' labelName='Activity:' selectName='activities' selectId='activity-select' onChangeHandler={setActivity} options={activityDreopdownData} /> */}
          <br/>
          <InputGroup htmlFor='routesAttempted' labelName='Routes Attempted:' type='number' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='routesCompleted' labelName='Routes Completed:' type='number' onChangeHandler={setDate}/>
          <br/>
          Max Difficulty
          <br/>
          Avg Difficulty
          <br/>
          Easiest Difficulty
          <br/>
          <Textarea htmlFor='notes' labelName='Notes:' onChangeHandler={setNotes}/>
          {/* <InputGroup htmlFor='overallIntensity' labelName='Overall Intensity:' type='range' min="0" max="50" onChangeHandler={setDate}/> */}
          <br/>
          <br/>
          <h3>Gear</h3>
          <InputGroup htmlFor='shoes' labelName='Shoes:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='chalk' labelName='Chalk:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='harness' labelName='Harness:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='rope' labelName='Rope:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='quickDraws' labelName='Quick Draws:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='cams' labelName='Cams:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='nuts' labelName='Nuts:' type='text' onChangeHandler={setDate}/>
          <br/>
          <InputGroup htmlFor='hexes' labelName='Hexes:' type='text' onChangeHandler={setDate}/>
          <br/>
          <br/>
          <h3>Route Data:</h3>
          <table>
            <tr>
              <td>Route #</td>
              <td>Grade</td>
              <td>Outcome</td>
              <td>Intensity</td>
              <td>Route Type</td>
              <td>Hold Type</td>
            </tr>
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
          </table>
          <InputGroup htmlFor='routeNumber' labelName='Route #:' type='number' onChangeHandler={setRouteNumber}/>
          <br/>
          <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
          <br/>
          {/* <br/
          Time to Complete
          <br/> */}
          <Dropdown htmlFor='outcome' labelName='Outcome:' selectName='outcome' selectId='outcome-select' onChangeHandler={setOutcome} options={outcomeDropdownData} />
          <br/>
          <InputGroup htmlFor='intensity' labelName='Intensity:' type='text' onChangeHandler={setIntensity}/>
          <br/>
          <Dropdown htmlFor='route-select' labelName='Type of Route:' selectName='routes' selectId='route-select' onChangeHandler={setRouteType} options={routeDreopdownData} />
          <br/>
          <Dropdown htmlFor='holds-select' labelName='Hold Type:' selectName='holds' selectId='holds-select' onChangeHandler={setHoldTypes} options={holdsDropdownData} />
          <br/>
          <Button buttonName='Add Route' buttonClickHandler={saveRouteHandler} />
          <br/>
          <br/>
          <br/>
          <br/>
          <Button buttonName='Submit Workout' />
        </Form>
      </StyledCard>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
