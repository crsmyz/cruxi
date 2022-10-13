import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  buttonName: string;
  buttonClickHandler: any;
}

const StyledButton = styled.button`
  color: #FFFFFF;
  font-size: 1.25rem;
  font-weight: 600;
  background-color: #00B6FC;
  border: none;
  box-sizing: border-box;
  display: inline-block;
  height: 45px;
  line-height: 24px;
  padding: 8px 24px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  font-family: "Rubik", sans-serif;

`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={props.buttonClickHandler}>
      {props.buttonName}
    </StyledButton>
  );
}

export default Button;
