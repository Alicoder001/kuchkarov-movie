import React from "react";
import { TextFildProps } from "./text-fild.props";
import { ErrorMessage, FieldHookConfig, useField } from "formik";

const TextFild = ({ ...props }: TextFildProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  console.log(meta);
  return (
    <div className="w-full inline-block">
      <label
        className={`inline-block w-full ${
          meta.touched && meta.error && "border-red-500 border-2"
        }`}
      >
        <input className="input" {...props} {...field} />
      </label>
      <p className="text-red-500">
        <ErrorMessage name={field.name} />
      </p>
    </div>
  );
};

export default TextFild;
