import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import ProductProvider from './context/products/provider';
import SearchProvider from './context/search/provider';
import ByIdProvider from './context/byId/provider';

ReactDOM.render(
  <ProductProvider>
    <SearchProvider>
      <ByIdProvider>
        <App />
      </ByIdProvider>
    </SearchProvider>
  </ProductProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
