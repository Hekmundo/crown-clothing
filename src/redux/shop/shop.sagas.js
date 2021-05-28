import { takeLatest, put, call, all } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();

    // call() allows syncronous functions to be yielded
    // AND defer more control to redux-saga
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

function* onFetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(onFetchCollectionsStart)]);
}
