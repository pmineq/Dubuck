import logo from '../assets/images/logo.png';
import { Component } from 'react';
import { Link } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <header id="header">
        {this.props.Backbtn === true && (
          <Link to={this.props.link} className="header-back"></Link>
        )}
        
        <h1>{this.props.title}</h1>
        <Link to="/Main" className="header-logo" title="메인으로 이동">
          <img src={logo} alt="로고 이미지" />
        </Link>
        
      </header>
    )
  }
}

export default Header;