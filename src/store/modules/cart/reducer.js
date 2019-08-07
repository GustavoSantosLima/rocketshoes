import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case 'CART_ADD':
      return produce(state, draft => {
        const index = draft.findIndex(p => p.id === action.product.id);

        if (index >= 0) {
          draft[index].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case 'CART_REMOVE':
      return produce(state, draft => {
        return draft.filter(p => p.id !== action.id);
      });
    case 'CART_UPDATE_AMOUNT': {
      if (action.amount <= 0) return state;

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
