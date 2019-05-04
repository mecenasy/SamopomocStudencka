import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Router, Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Content from '../Content/Content';

const dupa = () => (<div>jhsgsjkdfhgsfjkshgfjskdfhgsjkdfhgsjfkhgsfd</div>);

const Page: FC<{ history: any; }> = ({
   history }) => (
      <Router history={history}>
         <Container>
            <Header />
            <Switch>
               <Route path={'/'} exact component={dupa} />
               <Route path={'/:id'} component={Content} />
            </Switch>
         </Container>
      </Router>
   );

export default Page;
