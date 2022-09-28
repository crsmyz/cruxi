import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  buttonName: string;
  buttonClickHandler: any;
}

const StyledButton = styled.button`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  background-color: #0DAAFF;
  border-radius: 24px;
  border: none;
  box-sizing: border-box;
  display: inline-block;
  height: 45px;
  line-height: 24px;
  padding: 8px 16px;
  text-align: center;
  vertical-align: middle;
`;

export function Button(props: ButtonProps) {
  return (
    <StyledButton onClick={props.buttonClickHandler}>
      {props.buttonName}
    </StyledButton>
  );
}

export default Button;
