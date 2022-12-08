export interface DropdownProps {
    onChangeHandler: any;
    htmlFor: any;
    labelName: string;
    selectName: any;
    selectId: any;
    options: Array<option>;
    value?: any;
    disable?: boolean;
}

interface option {
    value: string;
    label: string;
}