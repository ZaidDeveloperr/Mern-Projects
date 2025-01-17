import { createContext, useEffect, useState } from 'react';
import { products } from '../assets/assets';  // Ensure products is properly imported
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 50;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({})

  const addToCart = async (itemId, size) => {

    if(!size){
      toast.error('Select Product Size')
      return;
    }

    let cartData = structuredClone(cartItems)

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1
      }
      else{
        cartData[itemId][size] = 1
      }
    }
    else{
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }
    setCartItems(cartData)
  }

  const value = {
    products, // Products should be available here for any component consuming this context
    currency, 
    delivery_fee, 
    search, 
    setSearch, 
    showSearch, 
    setShowSearch,
    cartItems,
    addToCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
