import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const updateFirestoreCartSuccess = () => ({
  type: CartActionTypes.UPDATE_FIRESTORE_CART_SUCCESS,
});

export const updateFirestoreCartFailed = (errorMessage) => ({
  type: CartActionTypes.UPDATE_FIRESTORE_CART_FAILED,
  payload: errorMessage,
});

export const hydrateCart = (cartItemsByIdAndQuantity) => ({
  type: CartActionTypes.HYDRATE_CART,
  payload: cartItemsByIdAndQuantity,
});

export const updateLocalCartSuccess = (cartItems) => ({
  type: CartActionTypes.UPDATE_LOCAL_CART_SUCCESS,
  payload: cartItems,
});

export const updateLocalCartFailed = (errorMessage) => ({
  type: CartActionTypes.UPDATE_LOCAL_CART_FAILED,
  payload: errorMessage,
});
