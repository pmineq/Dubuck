import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/scss/account.scss';

import Layout from '../../components/Layout';
import Toparea from '../../components/Toparea';



const Login = (props) => {
  return (
		<Layout containName='main'>
			<Toparea/>
			<div className="login-group">
				<div className="input-wrap">
					<label htmlFor="email">이메일</label>
					<input type="text" id="email"/>
				</div>
				<div className="input-wrap">
					<label htmlFor="pw">비밀번호</label>
					<input type="password" id="pw" placeholder="********"/>
				</div>
				{/* <button type="button" className="btn btn-goto">로그인</button> */}
				<Link to="/Main" className="btn btn-goto">로그인</Link>
				<Link to="/Find" className="btn-text">비밀번호가 뭐였더라?</Link>
			</div>
		</Layout>
	);
};

export default Login;