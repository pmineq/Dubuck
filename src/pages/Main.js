import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Toparea from '../components/Toparea';
import { Popup, Popup2, Popup3 } from '../components/Popup';

import '../assets/scss/main.scss'

import $ from "jquery";




const Main = (props) => {

	useEffect(() => {
		//튜토리얼 최초진입
		if (!localStorage.getItem('tutorial')) {

			//좌표값 top
			const box1offset = $('.box.calendar').offset().top,
						message1offset = box1offset + 265; //출석체크

			const box2offset = $('.box.study').offset().top,
						message2offset = box2offset - 100; //영단어공부

			const box3offset = $('.box.test').offset().top,
						message3offset = box3offset - 100; //챌린지시험

			const box4offset = $('.box.result').offset().top,
						message4offset = box4offset - 100; //챌린지결과

						
			$('.tutorial-wrap').show();

			//step01
			$('.step01').show();
			$('.step01').find('.area').css('top', box1offset);
			$('.step01').find('.popup-wrap').css('top', message1offset);

			//step02
			$('.step01 .btn-next').on('click', function(){
				$('.step01').hide();
				$('.step02').show();
				$('.step02').find('.area').css('top', box2offset);
				$('.step02').find('.popup-wrap').css('top', message2offset);
			});
		
			//step03
			$('.step02 .btn-next').on('click', function(){
				$('.step02').hide();
				$('.step03').show();
				$('.step03').find('.area').css('top', box3offset);
				$('.step03').find('.popup-wrap').css('top', message3offset);
			});
		
			//step04
			$('.step03 .btn-next').on('click', function(){
				$('.step03').hide();
				$('.step04').show();
				$('.step04').find('.area').css('top', box4offset);
				$('.step04').find('.popup-wrap').css('top', message4offset);
			});
		
			//start
			$('.step04 .btn-next').on('click', function(){
				$('.step04').hide();
				$('.tutorial-start').show();
			});

		
			//last
			$('.tutorial-start .btn-confirm').on('click', function(){
				$('.tutorial-start').hide();
				$('.tutorial-wrap').hide();
		
				localStorage.setItem('tutorial', 'Y');
			});

		
			//stop
			$('.tutorial-wrap .popup-close').on('click', function(){
				// $(this).parents('#popup').hide();
				$('.tutorial-stop').show();
			});
		
			$('.tutorial-stop .btn-confirm').on('click', function(){
				$('.tutorial-stop').hide();
				$('.tutorial-wrap').hide();

				localStorage.setItem('tutorial', 'Y');
			});

		
		}
	}, [])

  return (
		<Layout containName='main'>
			<Toparea/>

			<Popup2 popupName='popup-comment' title={'두벅이 소리함'} comment>
				불편한점, 바라는 점등 다양한 의견을 들려주세요!
      </Popup2>


			{/* S: tutorial */}
			<div className='tutorial-wrap'>
				
				{/* S: step01 */}
				<div className='step01'>
					<div className='area'></div>
					<Popup3 popupName='tutorial-message' title={'두벅이와 함께'}>
						출결관리를 통해 이달에 두벅이와 공부를 몇 번 했는지 알 수 있습니다.
					</Popup3>
				</div>
				{/* E: step01 */}

				{/* S: step02 */}
				<div className='step02'>
					<div className='area'></div>
					<Popup3 popupName='tutorial-message' title={'차근차근'}>
						외울 수 있는 문항 만큼 지정해서, 그날의 영어 단어를 외워보자.
					</Popup3>
				</div>
				{/* E: step02 */}

				{/* S: step03 */}
				<div className='step03'>
					<div className='area'></div>
					<Popup3 popupName='tutorial-message' title={'도전 해보자'}>
						여태 공부한 영어 실력을 뽑낼수 있어요.<br/>
						챌린지 시험을 통해 성적을 확인해 보세요.
					</Popup3>
				</div>
				{/* E: step03 */}

				{/* S: step04 */}
				<div className='step04'>
					<div className='area'></div>
					<Popup3 popupName='tutorial-message' title={'성장과정'}>
						챌린지를 통해서 성장한 나의 기록을 확인할 수 있습니다. 
					</Popup3>
				</div>
				{/* E: step04 */}

				<Popup popupName='tutorial-start' btn confirmtext='확인'>
					두벅이와 함께<br/>
					공부를 시작해보세요.
				</Popup>

				<Popup popupName='tutorial-stop' btn confirmtext='확인'>
					튜도티얼은 그만 보고<br/>
					시작하시겠습니까?
				</Popup>

			</div>
			{/* E: tutorial */}


			{/* S: box-wrap */}
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
			{/* E: box-wrap */}

		</Layout>
	);


};

export default Main;