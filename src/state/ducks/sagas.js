import { all } from 'redux-saga/effects';
import { combinedSaga as feedSagas } from './feed/sagas';
import { combinedSaga as widgetSagas } from './widgets/sagas';

export default function* rootSaga() {
  yield all([
    feedSagas(),
    widgetSagas(),
  ]);
}
