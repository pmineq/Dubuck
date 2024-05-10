import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Popup, Popup2 } from '../../components/Popup';

import '../../assets/scss/challenge.scss';




const ChallengeView = (props) => {

   const pathname = useLocation().pathname.substring(1);

   useEffect(() => {
      document.querySelector('.write-answer input').focus();

      //카드 뒤집기
      const card = document.querySelector('.card');
      card.addEventListener('click', (event) => {
         if(!event.target.classList.contains('btn-sound')) {
            card.classList.add('active');
         }
      });
   
   }, []);




   return (
      <Layout header containName='view'>

         {pathname.startsWith('Study') && (
				<Popup popupName='study-stop' btn confirmtext='확인'>
               오늘의 공부를<br/>
               끝내시겠습니까?
            </Popup>
         )} 


         {pathname.startsWith('Challenge') && (
				<Popup2 popupName='challenge-stop' title={'잠깐!\n아직 풀지 않은 문제들이 있습니다.'} btn challenge>
               지금까지 푼 단어들은 저장 및 채점에 포함되지 않으므로, 처음부터 시작 하셔야 합니다. <br/><br/>
               그래도 나가시겠습니까?
            </Popup2>
         )} 


         <div className="count-wrap">
            <div className="count">항목수
               <div className="num-area"><span>2</span>/<span>100</span></div>
            </div>

            
               <div className="count wrong">오답수
                  <div className="num-area">
                     {pathname.startsWith('Study') && (
                        <span>2</span>/<span>100</span>
                     )} 
                  </div>
               </div>
            
         </div>

         <div className="card">
            <div className="front">
               <p className="grammar">명사</p>
               <strong className="word">word</strong>
               <button type="button" className="btn-sound">미국 영국 [Ig’zist]</button>
            </div>
            <div className="back">
               <p className="grammar">명사</p>
               <strong className="word">한글답</strong>
                  <button type="button" className="btn-sound">미국 영국 [Ig’zist]</button>
            </div>
         </div>

         <div className="write-answer">
            <p>단어를 작성해 보세요</p>
            <input type="text"/>
         </div>

         <div className="footer-btngroup">
            <Link to="" className="btn-prev" disabled={true}>Prev</Link>
            {pathname.startsWith('Study') ? (<Link to="/Study/Finish" className="btn-next">Next</Link>) : (<Link to="/Challenge/Finish" className="btn-next">Next</Link>)}
         </div>
      </Layout>
	);
};



export default ChallengeView;