import React from 'react';
import { Section } from '../Pages/pageStyles';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Section>{children}</Section>
    </>
  );
};

export default Layout;
