import { isNull } from 'lodash-es';
import { applyMiddleware, Store, createStore } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer, { RootState } from '../reducer';
import rootEpic from '../epic';

export class ApplicationStore {
  static _store: Store<RootState>;

  static get store() {
    if (isNull(this._store)) {
      throw Error('store is not initialized');
    }
    return this._store;
  }

  static init() {
    const epicMiddleware = createEpicMiddleware();
    //const { NODE_ENV = 'development' } = process.env;
    const middlewares: Array<any> = [epicMiddleware];
    //if (NODE_ENV === `development`) {
    middlewares.push(logger);
    //}
    // const persistConfig = {
    //   key: 'root',
    //   storage,
    // };
    // const persistedReducer = persistReducer(persistConfig, rootReducer);
    this._store = createStore(rootReducer, applyMiddleware(...middlewares));

    epicMiddleware.run(rootEpic as any);
  }
}

export const store = ApplicationStore;
