import React, { Component, FC, ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default Layout;
