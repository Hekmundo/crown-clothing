import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';
import {
  clearCart,
  updateFirestoreCartSuccess,
  updateFirestoreCartFailed,
  updateLocalCartSuccess,
  updateLocalCartFailed,
} from './cart.actions';

import { selectCartItems } from './cart.selectors';
import { selectCurrentUserId } from '../user/user.selectors';
import {
  updateFirestoreCart,
  getUserCart,
} from '../../firebase/firebase.utils';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* hydrateCart({ payload }) {
  try {
    const userCart = yield call(getUserCart, payload);
    yield put(updateLocalCartSuccess(userCart));
  } catch (error) {
    yield put(updateLocalCartFailed(error.message));
  }
}

function* updateUserCart() {
  try {
    const currentUserId = yield select(selectCurrentUserId);
    if (!currentUserId) return;

    const cartItemsLocal = yield select(selectCartItems);
    yield call(updateFirestoreCart, currentUserId, cartItemsLocal);

    yield put(updateFirestoreCartSuccess());
  } catch (error) {
    yield put(updateFirestoreCartFailed(error.message));
  }
}

// ! Remove this action listener and add clear cart action to user.sagas
function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

function* onHydrateCart() {
  yield takeLatest(CartActionTypes.HYDRATE_CART, hydrateCart);
}

function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,

      // CLEAR_CART is not included as that only occurs on sign out
    ],
    updateUserCart
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onHydrateCart)]);
}
