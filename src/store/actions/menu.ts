import { AxiosError } from 'axios';
import * as C from '../constance/menu';

export const getMenuRequests = (): C.GetMenuRequestsAction => ({
   type: C.MenuActionType.getMenuRequest,
});

export const getMenuSuccess = (menu: C.MenuItem[]): C.GetMenuSuccessAction => ({
   type: C.MenuActionType.getMenuSuccess,
   menu,
});

export const getMenuFail = (error: AxiosError): C.GetMenuFailAction => ({
   type: C.MenuActionType.getMenuFail,
   error,
});
