export function addToCart(product) {
  return {
    type: 'CART_ADD',
    product,
  };
}

export function removeToCart(id) {
  return { type: 'CART_REMOVE', id };
}

export function updateAmount(id, amount) {
  return { type: 'CART_UPDATE_AMOUNT', id, amount };
}
