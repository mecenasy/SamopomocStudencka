import { createSelector } from 'reselect';
import { ApplicationState } from '~/store/ApplicationState';
import { MenuItem } from '~/store/constance/menu';
import { SupportType } from '../constance/supportData';

const getMenu = (state: ApplicationState): MenuItem[] => state.menu;

export const getMenuSelector = createSelector<ApplicationState, MenuItem[], MenuItem[]>(getMenu, (menu: MenuItem[] = []) => menu);

export const getSupportTypes = createSelector<ApplicationState, MenuItem[], SupportType[]>(getMenuSelector, (menu: MenuItem[]) => menu.reduce<SupportType[]>(
   (prev: SupportType[], cur: MenuItem) => {
      prev.push(cur.type);
      return prev;
   }, []));
