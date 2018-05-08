import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo';
import Layout from './containers/Layout';
import './assets/css/index.css';
import './assets/js/index.js';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider client={client}>
          <Layout />
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
