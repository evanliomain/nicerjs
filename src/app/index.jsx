import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import { App } from './components/App';

import store from './store';

const storeInstance = store();

window.onload = () => render(
  <AppContainer>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').App;

    return render(
      <AppContainer>
        <Provider store={storeInstance}>
          <NewApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
