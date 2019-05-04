import * as C from '../constance/supportData';

export const supportDataReducer = (state: C.SupportData[] = [], action: C.SupportDataAction): C.SupportData[] => {
   switch (action.type) {
      case C.SupportDataActionType.getSupportDataSuccess: {
         return action.supportData;
      }
      default:
         return state;
   }
};
