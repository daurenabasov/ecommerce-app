import React, { FC, LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label: FC<LabelProps> = (props) => {
  const { children, ...attributes } = props;
  return <label {...attributes}>{children}</label>;
};

export { Label };
