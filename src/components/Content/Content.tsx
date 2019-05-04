import React from 'react';
import { Dispatch, connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import * as P from './parts';
import { SupportType } from '~/store/constance/supportData';
import { getSupportDataRequest } from '~/store/actions/supportData';
import { ApplicationState } from '~/store/ApplicationState';
import SupportList from '../SupportList/SupportList';
import SearchInput from '../SearchImput/SearchImput';

interface ContentProps extends RouteComponentProps {
   getSupportDate: (supportTape: SupportType) => void;
}

class Content extends React.Component<ContentProps> {
   componentDidMount() {
      const path = this.props.location.pathname.slice(1);
      this.props.getSupportDate(path as SupportType);
   }

   componentDidUpdate(prevProps, prevState) {
      const path = this.props.location.pathname.slice(1);
      const prevPath = prevProps.location.pathname.slice(1);
      if (path !== prevPath) {
         this.props.getSupportDate(path as SupportType);
      }
   }

   render() {
      return (
         <>
            <P.Content flexDirection={'column'}>
               <SearchInput />
               <SupportList />
            </P.Content>
         </>
      );
   }
};

const mapStateToProps = (state: ApplicationState) => ({

});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({

   getSupportDate: (supportTape: SupportType) => {
      dispatch(getSupportDataRequest(supportTape));
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Content));
