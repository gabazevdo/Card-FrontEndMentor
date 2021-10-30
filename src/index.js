import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';


const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Red Hat Display', sans-serif;
  }
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
