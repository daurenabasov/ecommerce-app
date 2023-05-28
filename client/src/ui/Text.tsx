import React, { Attributes, FC, HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<Attributes> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Text: FC<TextProps> = (props) => {
  const { children, as = "span" } = props;

  const Tag = as;
  return <Tag>{children}</Tag>;
};

export { Text };
