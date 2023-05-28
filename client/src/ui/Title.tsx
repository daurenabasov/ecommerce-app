import React, { Attributes, FC, HTMLAttributes, ReactNode } from "react";

interface TitleProps extends HTMLAttributes<Attributes> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Title: FC<TitleProps> = (props) => {
  const { children, as = "h1" } = props;
  const Tag = as;
  return <Tag>{children}</Tag>;
};

export { Title };
