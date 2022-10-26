import styled from 'styled-components';
import { DropdownProps } from './Dropdown.interface';
import { StyledDropdown, StyledLabel, StyledSelect, StyledOption } from './StyledDropdown';

export function Dropdown(props: DropdownProps) {
  return (
    <StyledDropdown>
      <StyledLabel htmlFor={props.htmlFor}>{props.labelName}</StyledLabel>
      <br/>
      <StyledSelect name={props.selectName} id={props.selectId} onChange={(e) => props.onChangeHandler(e.target.value)}>
              {props.options.map((eachOption: any) => (
                <StyledOption value={eachOption.value}>{eachOption.label}</StyledOption>
              ))}
      </StyledSelect>
    </StyledDropdown>
  );
}

export default Dropdown;
