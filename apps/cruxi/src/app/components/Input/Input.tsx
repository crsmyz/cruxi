import React from "react";
import { InputProps } from './Input.interface';
import { StyledInputGroup } from "./StyledInput";
import { StyledLabel } from "./StyledInput";
import { StyledInput } from './StyledInput';

export function InputGroup(props: InputProps) {
  return (
    <StyledInputGroup>
      <StyledLabel htmlFor={props.htmlFor}>{props.labelName}</StyledLabel>
      <br/>
      <StyledInput type={props.type} onChange={(e) => props.onChangeHandler(e.target.value)} />
    </StyledInputGroup>
  );
}

export default InputGroup;
