import React, { FC, FormHTMLAttributes, ReactNode } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  chilren: ReactNode;
}

const Form: FC<FormProps> = (props) => {
  const { chilren, ...allProps } = props;

  return <form {...allProps}>{chilren}</form>;
};

export { Form };
