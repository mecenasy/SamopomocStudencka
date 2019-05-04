import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Box } from '@rebass/grid';
import { Dropdown } from 'react-bootstrap';

import { ApplicationState } from '~/store/ApplicationState';
import { getMenuRequests as getMenuRequest } from '~/store/actions/menu';
import { getMenuSelector } from '~/store/selectors/menu';
import * as P from './parts';
import ModalForm from '../Modal/Modal';
import { MenuItem } from '~/store/constance/menu';

interface HeaderProps {
   menu: MenuItem[];
   getMenu: () => void;
}

class Header extends React.Component<HeaderProps, { showModal: boolean }> {
   state = {
      showModal: false,
   };

   componentDidMount() {
      this.props.getMenu();
   }

   onToggleModal = () => {
      this.setState((p) => ({ showModal: !p.showModal }));
   };

   render() {
      const { menu } = this.props;
      return (
         <>
            <P.Navbar sticky={'top'} variant="dark" bg="primary">
               <P.Header flexWrap={'wrap'}>
                  <Box width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 4]} order={[2, 2, 2, 2, 1]}>
                     <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                           Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                           {menu && menu.map((item, index) => (
                              <P.Link
                                 key={item.id + index}
                                 to={item.link}
                              >
                                 {item.title}
                              </P.Link>
                           ))}
                           <Dropdown.Divider />
                           <P.Link to={'/all'}>Wszystkie</P.Link>
                        </Dropdown.Menu>
                     </Dropdown>
                  </Box>
                  <Box width={[1, 1, 1, 1, 1 / 2]} order={[1, 1, 1, 1, 2]}>
                     <P.Title>Portal samopomocy stydenckiej</P.Title>
                  </Box>
                  <Box width={[1 / 2, 1 / 2, 1 / 2, 1 / 2, 1 / 4]} order={[3]}>
                     <P.ButtonWrapper>
                        <P.Button variant="success" onClick={this.onToggleModal}>Dodaj nowy plik</P.Button>
                     </P.ButtonWrapper>
                  </Box>
               </P.Header>
            </P.Navbar>
            <ModalForm showModal={this.state.showModal} onClose={this.onToggleModal} />
         </>
      );
   }
}

const mapStateToProps = (state: ApplicationState) => ({
   menu: getMenuSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
   getMenu: () => {
      dispatch(getMenuRequest());
   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
