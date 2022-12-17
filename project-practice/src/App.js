import React from 'react';
import {createGlobalStyle} from 'styled-components';
import LoginTamplete from './components/LoginTamplete';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/login" element={<LoginTamplete />} />
    </Routes>
    </>
  );
}

export default App;
