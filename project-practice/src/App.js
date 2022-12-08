import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Login from './components/Login';
import LoginTamplete from './components/LoginTamplete';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <LoginTamplete>
      <Login />
    </LoginTamplete>
    </>
  );
}

export default App;
