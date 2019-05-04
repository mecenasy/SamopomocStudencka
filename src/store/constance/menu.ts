import { AxiosError } from 'axios';
import { SupportType } from './supportData';

export interface MenuItem {
   id: string;
   link: string;
   title: string;
   type: SupportType;
}

export enum MenuActionType {
   getMenuRequest = 'menu/GET_MENU_REQUEST',
   getMenuSuccess = 'menu/GET_MENU_SUCCESS',
   getMenuFail = 'menu/GET_MENU_FAIL_',
}

export interface GetMenuRequestsAction {
   type: MenuActionType.getMenuRequest;
}

export interface GetMenuSuccessAction {
   type: MenuActionType.getMenuSuccess;
   menu: MenuItem[];
}

export interface GetMenuFailAction {
   type: MenuActionType.getMenuFail;
   error: AxiosError;
}

export type MenuAction = GetMenuSuccessAction | GetMenuFailAction | GetMenuRequestsAction;
