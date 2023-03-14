import React from 'react';
import { Provider } from 'react-intl-redux';
import { useConfig } from './config/ConfigContext';
import { configureStore } from './store';
import ErrorBoundary from './components/ErrorBoundary';
import { Apollo } from './api';
import App from './scenes/App';

const Main = ({ keycloak }) => {
  const config = useConfig();

  const { store, sentry } = configureStore(keycloak, config);

  return (
    <ErrorBoundary sentry={sentry}>
      <Provider store={store}>
        <Apollo>
          <App />
        </Apollo>
      </Provider>
    </ErrorBoundary>
  );
};

export default Main;
