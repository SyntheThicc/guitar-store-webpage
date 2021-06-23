import React from 'react';
import { Bar, HamburgerBtn } from './HamburgerStyle';
import { useGlobalContext } from '../../../Context';

const Hamburger = () => {
  const { isSidebarOpen, handleSidebar } = useGlobalContext();

  return (
    <HamburgerBtn onClick={handleSidebar}>
      <Bar active={isSidebarOpen} />
    </HamburgerBtn>
  );
};

export default Hamburger;
