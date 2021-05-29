import { takeLatest, call, all, put } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure,
} from './user.actions';
import { clearCart } from '../cart/cart.actions';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    yield put;
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
    yield put(clearCart());
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
  ]);
}
