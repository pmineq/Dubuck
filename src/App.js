import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/scss/common/normalize.css';
import './App.scss';

import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Login from './pages/account/Login';
import Join from './pages/account/Join';
import Find from './pages/account/Find';



class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" index element={<Intro/>}></Route>
          <Route path="/Main" element={<Main/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Join" element={<Join/>}></Route>
          <Route path="/Find" element={<Find/>}></Route>

          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    )
  }
}

export default App;
