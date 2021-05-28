import { takeLatest, all, put, call } from 'redux-saga/effects';
import UserActionTypes from './shop.types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';

function* onFetchCollectionsStart() {
  const collectionRef = yield firestore.collection('collections');
  try {
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield convertCollectionsSnapshotToMap(snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsSaga() {
  yield takeLatest(
    UserActionTypes.FETCH_COLLECTIONS_START,
    onFetchCollectionsStart
  );
}
