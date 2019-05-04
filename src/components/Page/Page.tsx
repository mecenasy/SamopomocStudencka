import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Content from '../Content/Content';
import StartPage from './StartPage';

const Page: FC<{ history: any; }> = ({
   history }) => (
      <Router history={history}>
         <Container>
            <Header />
            <Switch>
               <Route path={'/'} exact component={StartPage} />
               <Route path={'/:id'} component={Content} />
            </Switch>
         </Container>
      </Router>
   );

export default Page;
