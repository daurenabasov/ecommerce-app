import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, ...attributes } = props;
  return <button {...attributes}>{children}</button>;
};

export { Button };
