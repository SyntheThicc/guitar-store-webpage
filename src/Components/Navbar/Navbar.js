import React from 'react';
import { useLocation } from 'react-router-dom';
import Hamburger from './Hamburger/Hamburger';
import Dropdown from './DropdownMenu/Dropdown';
import { useGlobalContext } from '../../Context';
import Cart from '../Cart/Cart';
import {
  Nav,
  NavCenter,
  LinksContainer,
  NavLinks,
  NavItem,
  NavLink,
} from './NavbarStyle';

const pages = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
  {
    path: '/products',
    name: 'Products',
  },
];

const Navbar = () => {
  const { isSidebarOpen, handleSidebarClick, setIsDropdownOpen } =
    useGlobalContext();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Nav>
        <NavCenter>
          {/* NAV LINKS */}
          <LinksContainer active={isSidebarOpen}>
            <NavLinks active={isSidebarOpen}>
              {pages.map((page, index) => {
                if (page.name === 'Products') {
                  return (
                    <NavItem
                      key={index}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <NavLink active={location.pathname === page.path}>
                        {page.name}{' '}
                      </NavLink>
                      <Dropdown />
                    </NavItem>
                  );
                } else {
                  return (
                    <NavItem onClick={handleSidebarClick} key={index}>
                      <NavLink
                        active={location.pathname === page.path}
                        to={page.path}
                      >
                        {page.name}
                      </NavLink>
                    </NavItem>
                  );
                }
              })}
            </NavLinks>
          </LinksContainer>
          {/* NAV LINKS */}

          {/* HAMBURGER MENU */}
          <Hamburger />
          {/* HAMBURGER MENU */}
          <Cart />
        </NavCenter>
      </Nav>
    </>
  );
};

export default Navbar;
