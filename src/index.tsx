/* eslint-disable import/no-extraneous-dependencies  */
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { reducers } from '~/store/reducers';
import { rootSaga } from '~/store/rootSaga';
import App from './App';
import configureStore from './store/configure';

const history = createBrowserHistory();
/* eslint-disable no-underscore-dangle */
const initialState = window.__INITIAL_STATE__ || {};
const { store } = configureStore(history, initialState, reducers, rootSaga);

if (!SERVER_BUILD) {
   window.__NEWWEB_FRONTEND_VERSION = process.env.BUILD_NUMBER || '';
}

const renderApp = (AppComponent) => {
   ReactDOM.render(
      <AppContainer>
         <AppComponent store={store} history={history} />
      </AppContainer>,
      document.getElementById('app'),
   );
};

renderApp(App);

if (module.hot) {
   module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      renderApp(NextApp);
   });
}
