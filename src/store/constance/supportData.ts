import { AxiosError } from 'axios';

export enum SupportType {
   internet = 'internet',
   bazy = 'bazy',
   sise = 'sise',
   all = 'all',
}

export interface SupportData {
   type: SupportType;
   title: string;
   description: string;
   link: string;
}

export interface SupportFormData {
   file: Blob;
   title: string;
   type: SupportType;
   description: string;
}

export enum SupportDataActionType {
   getSupportDataRequest = 'supportData/GET_SUPPORT_DATA_REQUEST',
   getSupportDataSuccess = 'supportData/GET_SUPPORT_DATA_SUCCESS',
   getSupportDataFail = 'supportData/GET_SUPPORT_DATA_FAIL',

   getSupportDataFileRequest = 'supportData/GET_SUPPORT_DATA_FILE_REQUEST',
   getSupportDataFileSuccess = 'supportData/GET_SUPPORT_DATA_FILE_SUCCESS',
   getSupportDataFileFail = 'supportData/GET_SUPPORT_DATA_FILE_FAIL',

   postSupportDataRequest = 'supportData/POST_SUPPORT_DATA_REQUEST',
   postSupportDataSuccess = 'supportData/POST_SUPPORT_DATA_SUCCESS',
   postSupportDataFail = 'supportData/POST_SUPPORT_DATA_FAIL',

   getSupportDataBySearchTextRequest = 'supportData/GET_SUPPORT_DATA_BY_SEARCH_TEXT_REQUEST',
}

export interface GetSupportDataRequestsAction {
   type: SupportDataActionType.getSupportDataRequest;
   supportType: SupportType;
}

export interface GetSupportDataSuccessAction {
   type: SupportDataActionType.getSupportDataSuccess;
   supportData: SupportData[];
}

export interface GetSupportDataFailAction {
   type: SupportDataActionType.getSupportDataFail;
   error: AxiosError;
}

export interface GetSupportDataFileRequestsAction {
   type: SupportDataActionType.getSupportDataFileRequest;
   fileName: string;
}

export interface GetSupportDataFileSuccessAction {
   type: SupportDataActionType.getSupportDataFileSuccess;
}

export interface GetSupportDataFileFailAction {
   type: SupportDataActionType.getSupportDataFileFail;
   error: AxiosError;
}

export interface PostSupportDataRequestsAction {
   type: SupportDataActionType.postSupportDataRequest;
   formData: SupportFormData;
}

export interface PostSupportDataSuccessAction {
   type: SupportDataActionType.postSupportDataSuccess;
}

export interface PostSupportDataFailAction {
   type: SupportDataActionType.postSupportDataFail;
   error: AxiosError;
}

export interface GetSupportDataBySearchTextRequestsAction {
   type: SupportDataActionType.getSupportDataBySearchTextRequest;
   searchText: string;
}

export type SupportDataAction = GetSupportDataSuccessAction |
   GetSupportDataFailAction |
   GetSupportDataRequestsAction |
   GetSupportDataFileSuccessAction |
   GetSupportDataFileFailAction |
   GetSupportDataFileRequestsAction |
   PostSupportDataSuccessAction |
   PostSupportDataFailAction |
   PostSupportDataRequestsAction |
   GetSupportDataBySearchTextRequestsAction;
