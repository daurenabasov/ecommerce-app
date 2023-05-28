import React, { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const { ...attributes } = props;
  return <input {...attributes} />;
};

export { Input };
