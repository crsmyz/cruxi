export interface DropdownProps {
  onChangeHandler: any;
  htmlFor: any;
  labelName: string;
  selectName: any;
  selectId: any;
  options: Array<option>;
  value?: any;
  disable?: boolean;
  placeholder?: any;
}

interface option {
  value: string;
  label: string;
}
