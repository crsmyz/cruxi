import React from 'react';
// interfaces
import { ButtonProps } from './Button.interface';
// styles
import { StyledButton } from './StyledButton';

const Button = (props: ButtonProps) => {
  return (
    <StyledButton onClick={props.buttonClickHandler}>
      {props.buttonName}
    </StyledButton>
  );
}

export default Button;