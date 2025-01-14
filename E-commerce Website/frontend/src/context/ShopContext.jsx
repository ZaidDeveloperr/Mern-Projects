import { createContext, useState } from 'react';
import { products } from '../assets/assets';  // Ensure products is properly imported

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 50;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products, // Products should be available here for any component consuming this context
    currency, 
    delivery_fee, 
    search, 
    setSearch, 
    showSearch, 
    setShowSearch
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
