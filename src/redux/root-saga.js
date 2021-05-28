import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';

// Sagas are non blocking and all run concurrently
export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
