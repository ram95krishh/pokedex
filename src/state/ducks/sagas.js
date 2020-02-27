import { all } from 'redux-saga/effects';
import { combinedSaga as feedSagas } from './feed/sagas';

export default function* rootSaga() {
  yield all([
    feedSagas(),
  ]);
}
