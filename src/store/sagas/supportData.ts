
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { getSupportData, getAllSupportData, getSupportDataBySearchText, postSupportData, getSupportFile } from '~/api/requests';
import { getSupportDataFail, getSupportDataSuccess, postSupportDataSuccess, postSupportDataFail, getSupportDataFileSuccess, getSupportDataFileFail } from '../actions/supportData';
import {
   SupportDataAction,
   SupportDataActionType,
   GetSupportDataRequestsAction,
   SupportType,
   GetSupportDataBySearchTextRequestsAction,
   PostSupportDataRequestsAction,
   GetSupportDataFileRequestsAction,
} from '../constance/supportData';

export function* getSupportDataWatcher() {
   yield takeLatest<SupportDataAction>(SupportDataActionType.getSupportDataRequest, getSupportDataWorker);
}

export function* getSupportDataBySearchTextWatcher() {
   yield takeLatest<SupportDataAction>(SupportDataActionType.getSupportDataBySearchTextRequest, getSupportDataBySearchTextWorker);
}

export function* postSupportDataWatcher() {
   yield takeLatest<SupportDataAction>(SupportDataActionType.postSupportDataRequest, postSupportDataWorker);
}
export function* getSupportDataFileWatcher() {
   yield takeLatest<SupportDataAction>(SupportDataActionType.getSupportDataFileRequest, getSupportDataFileWorker);
}

export function* getSupportDataWorker({ supportType }: GetSupportDataRequestsAction) {
   try {
      let data: any;
      if (supportType === SupportType.all) {
         data = yield call(getAllSupportData);
      } else {
         data = yield call(getSupportData, supportType);
      }

      yield put(getSupportDataSuccess(data.data));
   } catch (error) {
      yield put(getSupportDataFail(error));
   }
}

export function* getSupportDataBySearchTextWorker({ searchText }: GetSupportDataBySearchTextRequestsAction) {
   try {
      yield delay(500);

      const data = yield call(getSupportDataBySearchText, searchText);

      yield put(getSupportDataSuccess(data.data));
   } catch (error) {
      yield put(getSupportDataFail(error));
   }
}

export function* postSupportDataWorker({ formData }: PostSupportDataRequestsAction) {
   try {
      yield delay(500);

      yield call(postSupportData, formData);

      yield put(postSupportDataSuccess());
   } catch (error) {
      yield put(postSupportDataFail(error));
   }
}

export function* getSupportDataFileWorker({ fileName }: GetSupportDataFileRequestsAction) {
   try {
      const { data } = yield call(getSupportFile, fileName);

      const blob = new Blob([data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = downloadUrl;
		console.log("TCL: exportfunction*getSupportDataFileWorker -> fileName", fileName)
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();

      yield put(getSupportDataFileSuccess());
   } catch (error) {
      yield put(getSupportDataFileFail(error));
   }
}
