import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import CartActionTypes from './cart.types';
import {
  clearCart,
  setCartFromFirebase,
  updateCartInFirebaseSuccess,
  updateCartInFirebaseFailed,
} from './cart.actions';

import { selectCartItems } from './cart.selectors';
import { selectCurrentUserId } from '../user/user.selectors';
import { getUserCartRef } from '../../firebase/firebase.utils';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

function* updateCartInFirebase() {
  const userId = yield select(selectCurrentUserId);
  if (userId) {
    try {
      const cartRef = yield getUserCartRef(userId);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
      yield put(updateCartInFirebaseSuccess);
    } catch (error) {
      yield put(updateCartInFirebaseFailed(error.message));
    }
  }
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}

function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
