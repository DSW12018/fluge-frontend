import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Layout from './containers/Layout';
import './assets/css/index.css';
import './assets/js/index.js';

const httpLink = new HttpLink({ uri: 'http://localhost:3000' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
