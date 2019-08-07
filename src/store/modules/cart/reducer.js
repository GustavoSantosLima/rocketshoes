import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'CART_ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });
    case 'CART_REMOVE':
      return produce(state, draft => {
        return draft.filter(p => p.id !== action.id);
      });
    case 'CART_UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        // eslint-disable-next-line array-callback-return
        draft.filter(product => {
          if (product.id === action.id) {
            product.amount = Number(action.amount);
          }
        });
      });
    }
    default:
      return state;
  }
}
