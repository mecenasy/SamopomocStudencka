import { call, fork, all, Effect } from 'redux-saga/effects';

export default (sagas: Array<() => IterableIterator<Effect>>) => {
   if (!sagas || !sagas.length) {
      return;
   }

   function* forkAllSagas() {
      yield all(
         sagas.map(fork),
      );
   }

   // tslint:disable-next-line:no-function-expression
   return function* rootSaga() {
      try {
         yield call(forkAllSagas);
      } catch (error) {
         console.error('There was an uncaught error in sagas, everyone should start screaming and running around helplessly', error);
         // TODO: application insights here
      }
   };
};
