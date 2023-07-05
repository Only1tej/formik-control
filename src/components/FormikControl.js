import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButton from "./RadioButton";
import Checkbox from "./Checkbox";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
    default:
      return null;
  }
}

export default FormikControl;
