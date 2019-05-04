import { createSelector } from 'reselect';
import { ApplicationState } from '~/store/ApplicationState';
import { SupportData } from '../constance/supportData';

const getSupportData = (state: ApplicationState): SupportData[] => state.supportData;

export const getSupportDataSelector = createSelector<ApplicationState, SupportData[], SupportData[]>(getSupportData, (menu: SupportData[] = []) => menu);
