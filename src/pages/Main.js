import React from 'react';

import Layout from '../components/Layout';
import Toparea from '../components/Toparea';

import '../assets/scss/main.scss'



const Main = (props) => {
  return (
		<Layout>
			<Toparea/>

			<div className="box-wrap">
				<div className="box-line">
					<button type="button" className="box calendar">
						<p>출석체크</p>
						<strong><span>1</span>일차</strong>
					</button>
				</div>
				<div className="box-line">
					<button type="button" className="box study">
						<strong>영단어<br/>공부</strong>
					</button>
					<button type="button" className="box test">
						<strong>챌린지<br/>시험</strong>
					</button>
				</div>
				<div className="box-line">
					<button type="button" className="box result">
						<strong>챌린지<br/>결과</strong>
					</button>
				</div>

			</div>

		</Layout>
	);
};

export default Main;