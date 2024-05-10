import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/scss/common/normalize.css';


import NotFound from './pages/NotFound';
import Main from './pages/Main';
import Calendar from './pages/Calendar';
import Comment from './pages/Comment';
import Intro from './pages/Intro';

import Login from './pages/account/Login';
import Join from './pages/account/Join';
import Find from './pages/account/Find';

import Start from './pages/words/Start';
import View from './pages/words/View';
import Finish from './pages/words/Finish';
import Result from './pages/words/List';
import Detail from './pages/words/Detail';



class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" index element={<Intro/>}></Route>
          <Route path="/Main" element={<Main/>}></Route>
          <Route path="/Calendar" element={<Calendar/>}></Route>
          <Route path="/Comment" element={<Comment/>}></Route>

          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Join" element={<Join/>}></Route>
          <Route path="/Find" element={<Find/>}></Route>

          <Route path="/Challenge" element={<Start/>}></Route>
          <Route path="/Challenge/View" element={<View/>}></Route>
          <Route path="/Challenge/Finish" element={<Finish/>}></Route>

          <Route path="/Challenge/Result" element={<Result/>}></Route>
          <Route path="/Challenge/Detail" element={<Detail/>}></Route>

          <Route path="/Study" element={<Start/>}></Route>
          <Route path="/Study/View" element={<View/>}></Route>
          <Route path="/Study/Finish" element={<Finish/>}></Route>


          <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    )
  }
}

export default App;
