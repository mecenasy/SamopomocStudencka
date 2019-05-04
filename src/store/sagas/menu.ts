
import { call, put, takeLatest } from 'redux-saga/effects';
import { getMenu } from '~/api/requests';
import { getMenuFail, getMenuSuccess } from '../actions/menu';
import { MenuAction, MenuActionType } from '../constance/menu';

export function* getMenuWatcher() {
   yield takeLatest<MenuAction>(MenuActionType.getMenuRequest, getMenuWorker);
}
export function* getMenuWorker() {
   try {
      const { data } = yield call(getMenu);

      yield put(getMenuSuccess(data));
   } catch (error) {
      yield put(getMenuFail(error));
   }
}
