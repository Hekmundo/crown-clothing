export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.reduce((newCartItems, cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      if (cartItem.quantity > 1) {
        newCartItems.push({ ...cartItem, quantity: cartItem.quantity - 1 });
      }
    } else {
      newCartItems.push(cartItem);
    }
    return newCartItems;
  }, []);
};
