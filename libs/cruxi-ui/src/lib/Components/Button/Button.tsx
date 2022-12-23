import React from 'react';
// interfaces
import { ButtonProps } from './Button.interface';
// styles
import { StyledButton } from './StyledButton';

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.buttonClickHandler}>
      {props.buttonName}
    </StyledButton>
  );
}