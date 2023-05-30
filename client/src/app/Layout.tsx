import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import React, { Component, FC, ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
