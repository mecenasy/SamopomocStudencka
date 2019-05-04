import * as C from '../constance/menu';

export const menuReducer = (state: C.MenuItem[] = [], action: C.MenuAction): C.MenuItem[] => {
   switch (action.type) {
      case C.MenuActionType.getMenuSuccess: {
         return action.menu;
      }
      default:
         return state;
   }
};
