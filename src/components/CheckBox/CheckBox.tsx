import {
  CheckBoxContainer,
  CheckBoxComponent,
  Label,
  ErrorMessage,
  CheckBoxWrapper,
} from "./styles";
import { CheckBoxProps } from "./types";

function CheckBox({
  name,
  checked,
  id,
  onChange,
  label,
  error,
}: CheckBoxProps) {
  return (
    <CheckBoxContainer>
      <CheckBoxWrapper>
        <CheckBoxComponent
          name={name}
          type="checkbox"
          checked={checked}
          id={id}
          onChange={onChange}
        />
        <Label htmlFor={id}>{label}</Label>
      </CheckBoxWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </CheckBoxContainer>
  );
}
export default CheckBox;
