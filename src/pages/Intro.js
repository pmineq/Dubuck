import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Toparea from '../components/Toparea';



const Intro = (props) => {
  return (
		<Layout containName='main'>
			<Toparea/>
			<div className="intro-btn-group">
				<Link to="/Login" className="btn btn-goto">로그인</Link>
				<Link to="/Join" className="btn btn-white btn-goto">이메일 가입</Link>
			</div>
		</Layout>
	);
};

export default Intro;