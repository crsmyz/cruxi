import React from 'react';
import { TextareaProps } from './Textarea.interface';
import {
  StyledTextareaGroup,
  StyledTextarea,
  StyledLabel,
} from './StyledTextarea';

export const Textarea = (props: TextareaProps) => {
  return (
    <StyledTextareaGroup>
      <StyledLabel htmlFor={props.htmlFor}>{props.labelName}</StyledLabel>
      <br />
      <StyledTextarea onChange={(e) => props.onChangeHandler(e.target.value)} />
    </StyledTextareaGroup>
  );
};