import React from 'react';
import { InputProps } from './Input.interface';
import { StyledInputGroup, StyledLabel, StyledInput } from './StyledInput';

export const InputGroup = (props: InputProps) => {
  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={props.htmlFor}>
        {props.labelName} {props?.rangeNumber}
      </StyledLabel>
      <br />
      <StyledInput
        type={props.type}
        name={props.name}
        min={props.min}
        max={props.max}
        value={props.value}
        step={props.step}
        onChange={(e) => props.onChangeHandler(e.target.value)}
      />
    </StyledInputGroup>
  );
};
