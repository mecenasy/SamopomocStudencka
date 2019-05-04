import { applyMiddleware, combineReducers, compose, createStore, ReducersMapObject } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ApplicationState } from '~/store/ApplicationState';

/* eslint-disable global-require, import/no-extraneous-dependencies  */
// tslint:disable:no-require-imports

const configureStore = (
   history,
   initialState: Partial<ApplicationState>,
   reducers: Partial<ReducersMapObject<ApplicationState>>,
   rootSaga: () => Iterator<any>,
) => {
   // Build middleware. These are functions that can process the actions before they reach the store.
   const sagaMiddleware = createSagaMiddleware();

   const middlewares = [
      sagaMiddleware,
      // routerMiddleware(history),
   ];
   if (process.env.NODE_ENV !== 'production') {
      middlewares.unshift(require('redux-immutable-state-invariant').default());
   }

   // If devTools is installed, connect to it
   const windowIfDefined = typeof window === 'undefined' ? null : window as Window & { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: () => any };
   /* eslint-disable no-underscore-dangle */
   const composeEnhancers = (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

   const composedMiddlewares = composeEnhancers(
      applyMiddleware(...middlewares),
   );

   // Combine all reducers and instantiate the app-wide store instance
   const allReducers = buildRootReducer(reducers);
   // const store = createStoreWithMiddleware(allReducers, initialState);// as Store<ApplicationState>;
   const store = createStore(
      allReducers,
      initialState,
      composedMiddlewares,
   );

   // Enable Webpack hot module replacement for reducers
   if (module.hot) {
      module.hot.accept('./reducers', () => {
         const nextRootReducer = require('./reducers'); // <typeof StoreModule>
         store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
      });
   }

   // launching root saga
   const rootSagaTask = rootSaga && sagaMiddleware.run(rootSaga);

   return { store, rootSagaTask };
};

const buildRootReducer = (allReducers) => combineReducers<ApplicationState>({ ...allReducers/* , routing: routerReducer */ });

export default configureStore;
export { buildRootReducer };

