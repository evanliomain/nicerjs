
import codeApp from './reducers';

import { createStore } from 'redux';

export default function() {

  const store = createStore(codeApp);

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      store.replaceReducer(require('./reducers/index').default);
      store.dispatch({ type : 'RELOAD' });
    });
  }

  return store;
}
