import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/scss/common.scss';

class Toparea extends Component {
  render() {
    return (
      <div className="intro-top">
        <Link to="/" className="logo">두벅 영워드<i></i></Link>
        <p>차 없는 나는 두벅이, 두벅두벅 걸어가면서 공부하는 영단어</p>
      </div>
    );
  }
}

export default Toparea;