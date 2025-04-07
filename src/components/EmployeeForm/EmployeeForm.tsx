import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import {
  CheckBox,
  CheckBoxContainer,
  CheckBoxLabel,
  EmployeeFormComponent,
  EmployeeFormWrapper,
  ErrorMessage,
  Title,
} from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Enter your full name")
      .max(50, "Max 50 symbols")
      .min(5, "Min 5 symbols"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Enter your age")
      .min(18, "Min  18 years")
      .max(80, "Max 80 years"),
    agreement: Yup.boolean()
      .required("This field is required")
      .oneOf([true], "You must accept the terms and conditions"),
    password: Yup.string()
      .required("Enter your password")
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Пароль должен содержать min 8 символов (заглавная буква, строчная, цифра, спецсимвол)'
      ),
    code: Yup.number()
      .typeError("Age must be a number")
      .test("min length", "Min 3 symbols", (value) => String(value).length >= 3)
      .test(
        "max length",
        "Max 8 symbols",
        (value) => String(value).length <= 8
      ),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      agreement: false,
      password: "",
      code: "",
    } as EmployeeFormValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.table(values);
    },
  });

  return (
    <EmployeeFormWrapper>
      <EmployeeFormComponent onSubmit={formik.handleSubmit}>
        <Title>Employee Form</Title>
        <Input
          name="fullName"
          label="Full Name *"
          id="full_name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          placeholder="Enter your Full Name"
          error={formik.errors.fullName}
        />

        <Input
          name="age"
          label="Age *"
          id="age"
          type="number"
          value={formik.values.age}
          onChange={formik.handleChange}
          placeholder="Enter your Age"
          error={formik.errors.age}
        />

        <Input
          name="password"
          label="Password *"
          id="password_id"
          placeholder="Enter your password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />

        <Input
          name="code"
          label="Code *"
          id="password_id"
          placeholder="Enter employee code"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.errors.code}
        />

        {/* <Input
          name="agreement"
          type="checkbox"
          checked={formik.values.agreement}
          label="I have read the terms of use *"
          onChange={formik.handleChange}
          error={formik.errors.agreement}
        /> */}
        <CheckBoxContainer>
          <CheckBox
            name="agreement"
            type="checkbox"
            id="agree_id"
            checked={formik.values.agreement}
            onChange={formik.handleChange}
          />
          <CheckBoxLabel htmlFor="agree_id">
            I agree privacy and policy
          </CheckBoxLabel>
        </CheckBoxContainer>
        <ErrorMessage>{formik.errors.agreement}</ErrorMessage>
        <Button name="Create" />
      </EmployeeFormComponent>
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
