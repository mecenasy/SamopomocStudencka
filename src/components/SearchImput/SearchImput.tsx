import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import * as P from './parts';
import { connect, Dispatch } from 'react-redux';
import { getSupportDataBySearchTextRequest } from '~/store/actions/supportData';

interface SearchInputProps {
   getSupportDataBySearchText: (searchText: string) => void;
}

class SearchInput extends React.Component<SearchInputProps> {
   onChange = ({ target }) => {
      this.props.getSupportDataBySearchText(target.value);
   };

   render() {
      return (
         <P.ButtonBox width={[1]}>
            <P.CardColumns>
               <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                     <InputGroup.Text id="inputGroup-sizing-default">Wyszukaj</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl onChange={this.onChange} />
               </InputGroup>
            </P.CardColumns>
         </P.ButtonBox>
      );
   }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
   getSupportDataBySearchText: (searchText: string) => {
      dispatch(getSupportDataBySearchTextRequest(searchText));
   },
});

export default connect(null, mapDispatchToProps)(SearchInput);
