import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from './redux/modules';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

export const store = createStore(rootReducer);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

reportWebVitals();
