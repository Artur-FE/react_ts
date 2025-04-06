import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { EmployeeFormComponent, EmployeeFormWrapper, Title } from "./styles";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Enter your full name")
      .max(50, "Max 50 symbols")
      .min(5, "Min 5 symbols"),
    age: Yup.number()
      .required("Enter your age")
      .min(18, "Min  18 years")
      .max(80, "Max 80 years"),
    checkBox: Yup.boolean().required("This field is required")
    .oneOf([true], "You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      checkBox: false,
    } as EmployeeFormValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.table(values);
    },
  });

  console.log(formik);

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
          name="checkBox"
          type="checkbox"
          label="I have read the terms of use *"
          onChange={formik.handleChange}
          error={formik.errors.checkBox}
        />
        
        <Button name="Create" />
      </EmployeeFormComponent>
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;