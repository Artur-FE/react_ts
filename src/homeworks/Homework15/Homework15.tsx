import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import CheckBox from "../../components/CheckBox/CheckBox";
import Input from "../../components/Input/Input";
import { FormWrapper, Homework15Container } from "./styles";
import { Homework15Types } from "./types";

function Homework15() {
  const schema = Yup.object().shape({
    validationCode: Yup.number()
      .required("Enter your validation code")
      .typeError("Code must be a number")
      .test(
        "length",
        "Code must be a 6 symbols",
        (value) => String(value).length === 6
      ),
    checkbox: Yup.boolean()
      .oneOf([true], "You must accept the Privacy and Policy")
      .typeError("You must accept the Privacy and Policy"),
  });

  const formik = useFormik({
    initialValues: {
      validationCode: "",
      checkbox: false,
    } as Homework15Types,
    validationSchema: schema,
    onSubmit: () => {
      console.log("Вы успешно вошли");
    },
  });

  return (
    <Homework15Container>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <Input
          name="validationCode"
          id="validation_code"
          label="Validation code *"
          placeholder="Enter your validation code"
          type="number"
          value={formik.values.validationCode}
          onChange={formik.handleChange}
          error={formik.errors.validationCode}
        />
        <CheckBox
          name="checkbox"
          id="checkbox_id"
          label="Privacy and policy *"
          checked={formik.values.checkbox}
          onChange={formik.handleChange}
          error={formik.errors.checkbox}
        />
        <Button name="Login" type="submit" />
      </FormWrapper>
    </Homework15Container>
  );
}

export default Homework15;
