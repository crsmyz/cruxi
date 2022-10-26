import React from "react";
import { FormProps } from "./Form.interface"; 
import { StyledForm } from "./StyledForm";

const Form = (props: FormProps) => {
  return (
    <StyledForm>
      <form action="" onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </StyledForm>
  );
}

export default Form;
