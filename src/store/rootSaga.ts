import { all, fork } from 'redux-saga/effects';
import { getMenuWatcher } from './sagas/menu';
import { getSupportDataWatcher, getSupportDataBySearchTextWatcher, postSupportDataWatcher, getSupportDataFileWatcher } from './sagas/supportData';

export function* rootSaga() {
   yield all([
      fork(getMenuWatcher),
      fork(getSupportDataWatcher),
      fork(getSupportDataBySearchTextWatcher),
      fork(postSupportDataWatcher),
      fork(getSupportDataFileWatcher),
   ]);
}
