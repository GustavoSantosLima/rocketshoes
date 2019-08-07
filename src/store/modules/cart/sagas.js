import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from './../../../util/format';

function* addToCart({ id }) {
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExist ? productExist.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  if (productExist) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const { data } = yield call(api.get, `/products/${id}`);

    const product = {
      ...data,
      amount: 1,
      priceFormatted: formatPrice(data.price),
    };

    yield put(addToCartSuccess(product));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  if (amount > stock.data.amount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('CART_ADD_REQUEST', addToCart),
  takeLatest('CART_UPDATE_AMOUNT_REQUEST', updateAmount),
]);
