import { FunctionComponent } from "react";
import styled from "@mui/material/styles/styled";

import TextField, { TextFieldProps } from "@mui/material/TextField";
import { inputSize, inputVariant } from "../config/theme/theme";

const CustonTexField = styled(TextField)({
  "&. MuiInputBase-input": {
    color: "black",
  },
});

type InputFieldProps = {
  className?: string;
  smallMobile?: boolean;
  noDefaultHelperText?: boolean;
  ariaLabel?: string; // Added aria-label prop
} & TextFieldProps;

const InputField: FunctionComponent<InputFieldProps> = ({
  className,
  ...props
}) => {
  return (
    <CustonTexField
      {...props}
      className={className || ""}
      label={"Search star"}
      placeholder={"Search"}
      size={inputSize}
      fullWidth={props.fullWidth}
      variant={inputVariant}
      value={props.value}
      onChange={props.onChange}
      autoFocus
    />
  );
};

export default InputField;
