import { createContext, useReducer } from 'react';

export const Store = createContext();
const initialState = {
  cart: { cartItems: [] },
};

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItemIndex = state.cart.cartItems.findIndex(
        (item) => item.slug === newItem.slug
      );
      let newCartItems;
      if (existItemIndex !== -1) {
        const existItem = state.cart.cartItems[existItemIndex];
        const newQuantity = existItem.quantity + newItem.quantity;
        newCartItems = [...state.cart.cartItems];
        newCartItems.splice(existItemIndex, 1, { ...existItem, quantity: newQuantity });
      } else {
        newCartItems = [...state.cart.cartItems, newItem];
      }
      return { ...state, cart: { ...state.cart, cartItems: newCartItems } };
    }
    case 'CART_REMOVE_ITEM': {
      const itemToRemove = action.payload;
      const updatedCartItems = state.cart.cartItems.filter(
        (item) => item.slug !== itemToRemove.slug
      );
      return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
    }
    case 'CART_REMOVE_ONE_ITEM': {
      const itemToRemove = action.payload;
      const cartItems = state.cart.cartItems.map((item) => {
        if (item.slug === itemToRemove.slug) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        } else {
          return item;
        }
      }).filter((item) => item !== null);
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}