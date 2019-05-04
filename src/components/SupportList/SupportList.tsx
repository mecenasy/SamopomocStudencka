import React, { FC } from 'react';
import * as P from './parts';
import { SupportData } from '~/store/constance/supportData';
import SimpleCard from '../Card/SimpleCard';
import { connect, Dispatch } from 'react-redux';
import { ApplicationState } from '~/store/ApplicationState';
import { getSupportDataSelector } from '~/store/selectors/supportData';
import { getSupportDataFileRequest } from '~/store/actions/supportData';

interface SupportListProps {
   supportData: SupportData[];
   getFile: (fileName: string) => void;
}

const SupportList: FC<SupportListProps> = ({ supportData, getFile }) => (
   <P.ButtonBox width={[1]}>
      <P.CardColumns>
         {supportData.map((item, index) => {
            const onGetFile = () => {
               getFile(item.link);
            };
            return (
               <SimpleCard key={index} {...item} getFile={onGetFile} />
            );
         })}
      </P.CardColumns>
   </P.ButtonBox>
);

const mapStateToProps = (state: ApplicationState) => ({
   supportData: getSupportDataSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
   getFile: (fileName: string) => {
      dispatch(getSupportDataFileRequest(fileName));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(SupportList);
