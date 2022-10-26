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



const LogWorkout = (props: LogWorkoutProps) => {

  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [routeType, setRouteType] = useState('');
  const [holdType, setHoldType] = useState('');
  const [grade, setGrade] = useState('');
  const [intensity, setIntensity] = useState('');
  const [notes, setNotes] = useState('');
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

  return (
    <StyledLogWorkout>
      <h2>Log Workout</h2>
      <StyledCard>
        <Form onSubmit={saveWorkoutHandler}>
          <InputGroup htmlFor='datetime-local' labelName='Date:' type='datetime-local' onChangeHandler={setDate}/>
          Start Time
          End Time
          <h3>Climbing Time:</h3>
          Climbing Time
          Total Rest
          Total Time
          <br/>

          <h3>Location</h3>
          Climbing Gym
          Location

          <h3>Session Data:</h3>
          <Dropdown htmlFor='activity-select' labelName='Activity:' selectName='activities' selectId='activity-select' onChangeHandler={setActivity} options={activityDreopdownData} />
          <br/>
          Total Routes
          <br/>
          Routes Attemped
          <br/>
          Routes Completed
          <br/>
          Max Difficulty
          <br/>
          Avg Difficulty
          <br/>
          Easiest Difficulty
          <br/>
          Overall Intensity
          <br/>
          <br/>
          <h3>Gear</h3>
          Shoes
          <br/>
          Chalk
          <br/>
          Rope Gear
            Harness
            Quick Draws
          <br/>
          Trad Gear
            Cams
            Nuts
            Hexes
            Tricams
            <br/>
            <br/>
          <h3>Notes:</h3>
          <Textarea htmlFor='notes' labelName='Notes:' onChangeHandler={setNotes}/>

          <h3>Route Data:</h3>
          Route #
          <br/>
          Grade
          <br/>
          <InputGroup htmlFor='grade' labelName='Grade:' type='text' onChangeHandler={setGrade}/>
          <br/>
          Time to Complete
          <br/>
          Outcome
          <br/>
          Intensity
          <br/>
          <InputGroup htmlFor='intensity' labelName='Intensity:' type='text' onChangeHandler={setIntensity}/>
          <br/>
          Wall Style
          <Dropdown htmlFor='route-select' labelName='Type of Route:' selectName='routes' selectId='route-select' onChangeHandler={setRouteType} options={routeDreopdownData} />
          <br/>
          Holds on Route
          <br/>
          <Dropdown htmlFor='holds-select' labelName='Hold Type:' selectName='holds' selectId='holds-select' onChangeHandler={setHoldType} options={holdsDropdownData} />
          <br/>
          <Button buttonName='Submit Workout' />
        </Form>
      </StyledCard>
    </StyledLogWorkout>
  );
}

export default LogWorkout;
