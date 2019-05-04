import { AxiosError } from 'axios';
import * as C from '../constance/supportData';

export const getSupportDataBySearchTextRequest = (searchText: string): C.GetSupportDataBySearchTextRequestsAction => ({
   type: C.SupportDataActionType.getSupportDataBySearchTextRequest,
   searchText,
});

export const getSupportDataRequest = (supportType: C.SupportType): C.GetSupportDataRequestsAction => ({
   type: C.SupportDataActionType.getSupportDataRequest,
   supportType,
});

export const getSupportDataSuccess = (supportData: C.SupportData[]): C.GetSupportDataSuccessAction => ({
   type: C.SupportDataActionType.getSupportDataSuccess,
   supportData,
});

export const getSupportDataFail = (error: AxiosError): C.GetSupportDataFailAction => ({
   type: C.SupportDataActionType.getSupportDataFail,
   error,
});
export const getSupportDataFileRequest = (fileName: string): C.GetSupportDataFileRequestsAction => ({
   type: C.SupportDataActionType.getSupportDataFileRequest,
   fileName,
});

export const getSupportDataFileSuccess = (): C.GetSupportDataFileSuccessAction => ({
   type: C.SupportDataActionType.getSupportDataFileSuccess,
});

export const getSupportDataFileFail = (error: AxiosError): C.GetSupportDataFileFailAction => ({
   type: C.SupportDataActionType.getSupportDataFileFail,
   error,
});

export const postSupportDataRequest = (formData: C.SupportFormData): C.PostSupportDataRequestsAction => ({
   type: C.SupportDataActionType.postSupportDataRequest,
   formData,
});

export const postSupportDataSuccess = (): C.PostSupportDataSuccessAction => ({
   type: C.SupportDataActionType.postSupportDataSuccess,
});

export const postSupportDataFail = (error: AxiosError): C.PostSupportDataFailAction => ({
   type: C.SupportDataActionType.postSupportDataFail,
   error,
});
