import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButton(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {}}
      </Field>
    </div>
  );
}

export default RadioButton;
