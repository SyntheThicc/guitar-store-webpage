import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../../../Context';

import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownList,
} from './DropdownStyle';

const Dropdown = () => {
  const { allBrands, handleSidebarClick, isDropdownOpen, selectBrand } =
    useGlobalContext();
  return (
    <DropdownContainer active={isDropdownOpen}>
      <DropdownList>
        {allBrands.map((brand, index) => {
          return (
            <DropdownItem onClick={handleSidebarClick} key={index}>
              <DropdownLink to='/products' onClick={() => selectBrand(brand)}>
                {brand}
              </DropdownLink>
            </DropdownItem>
          );
        })}
        {/* <Arrow className='arrow' /> */}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;
