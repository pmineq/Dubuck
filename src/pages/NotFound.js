import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

class NotFound extends Component {
  render() {
    return (
      <Layout>
        <div id="error">
          <h1>4<span className="zero">0<i className="eye1"></i><i className="eye2"></i><i className="lips"></i></span>4</h1>
          <strong>Page Not Found</strong>
          <p>해당 페이지를 찾을 수 없습니다.</p>
          <Link to="/" className="btn">메인으로</Link>
        </div>
      </Layout>
    );
  }
}

export default NotFound;