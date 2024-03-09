import React from 'react';
import Header from './Header';
import '../assets/scss/common/normalize.css';
import '../assets/scss/common/fonts.css';
import '../assets/scss/layout.scss';


// 넘겨주는 컴포넌트에 header 값이 있으면 header를 렌더
const Layout = ({header, children, containName=''}) => {
  return (
    <div id="wrapper">
      {header && (
        <Header
          title={header.title}
          Backbtn={header.Backbtn}
          link={header.link}
        />
      )}
      <div id="container" className={containName}>
        {children}
      </div>
    </div>
  );
}

export default Layout;