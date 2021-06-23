import React, { useState, useContext, useEffect, useReducer } from 'react';

import { data } from './Data/data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(data);

  const reducer = (state, action) => {
    if (action.type === 'OPENED') {
      return {
        isModalOpen: true,
        modalContent: `${action.payload}`,
      };
    }
    if (action.type === 'CLOSED') {
      return {
        isModalOpen: false,
        modalContent: '',
      };
    }
    return state;
  };
  const defaultState = {
    isModalopen: false,
    modalContent: '',
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const allBrands = [
    'All Products',
    ...new Set(data.map((item) => item.brand)),
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const cartTotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  const cartCounter = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const [showNotification, setShowNotification] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsDropdownOpen(false);
  };
  const handleSidebarClick = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };
  const handleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOpenModal = (id) => {
    const [clickedItem] = productsData.filter((item) => item.id === id);
    console.log(clickedItem.images[0]);
    dispatch({ type: 'OPENED', payload: clickedItem.images[0] });
  };

  const handleCloseModal = (id) => {
    dispatch({ type: 'CLOSED' });
  };

  const selectBrand = (brand) => {
    startLoading();
    if (brand === 'All Products') {
      setProductsData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return;
    }
    const filteredArray = data.filter((item) => item.brand === brand);
    setProductsData(filteredArray);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existingItem, quantity: existingItem.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 1500);
  };

  const incrementQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setCartItems(
      cartItems.map((i) =>
        i.id === item.id ? { ...item, quantity: item.quantity + 1 } : i
      )
    );
  };
  const decrementQuantity = (id) => {
    const clickedItem = cartItems.find((item) => item.id === id);

    setCartItems(
      cartItems
        .map((cartItem) => {
          if (cartItem.id === clickedItem.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity !== 0)
    );
  };

  const deleteItem = (id) => {
    const clickedItem = cartItems.find((item) => item.id === id);
    setCartItems(cartItems.filter((item) => item.id !== clickedItem.id));
  };

  const clearCart = () => {
    console.log('radi');
    setCartItems([]);
  };

  const startLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <AppContext.Provider
      value={{
        productsData,
        allBrands,
        setProductsData,
        isSidebarOpen,
        isDropdownOpen,
        isCartOpen,
        handleSidebarClick,
        handleCart,
        handleDropdownMenu,
        handleSidebar,
        cartItems,
        setCartItems,
        setIsDropdownOpen,
        state,
        dispatch,
        handleOpenModal,
        handleCloseModal,
        selectBrand,
        isLoading,
        addToCart,
        cartTotal,
        showNotification,
        deleteItem,
        incrementQuantity,
        decrementQuantity,
        startLoading,
        clearCart,
        setIsCartOpen,
        cartCounter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
