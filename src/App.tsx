import React from 'react';
import { Provider } from 'react-redux';
import GridProvider from '~/components/grid/GridProvider';
import Page from './components/Page/Page';

const App = ({ store, history }) => (
   <Provider store={store}>
      <GridProvider>
         <Page history={history} />
      </GridProvider>
   </Provider>
);

export default App;
