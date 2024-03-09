import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Toparea from '../components/Toparea';

import '../assets/scss/main.scss'



const Main = (props) => {
  return (
		<Layout containName='main'>
			<Toparea/>

			<div className="box-wrap">
				<div className="box-line">
					<Link to="/Calendar" className="box calendar">
						<p>출석체크</p>
						<strong><span>1</span>일차</strong>
					</Link>
				</div>
				<div className="box-line">
					<Link to="/Study" className="box study">
						<strong>영단어<br/>공부</strong>
					</Link>
					<Link to="/Challenge" className="box test">
						<strong>챌린지<br/>시험</strong>
					</Link>
				</div>
				<div className="box-line">
					<Link to="/Challenge/Result" className="box result">
						<strong>챌린지<br/>결과</strong>
					</Link>
				</div>

			</div>

		</Layout>
	);
};

export default Main;