import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';

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

      const request = new XMLHttpRequest();
      const url = 'https://random-word-api.herokuapp.com/word?length=5';

      request.open('GET', url, true);
      request.onload = function () {
         const words = request.responseText.slice(2, -2);
         console.log(request.responseText);
         document.querySelector('.word').innerHTML = words;

         // const korequest = new XMLHttpRequest();
         // const kourl = 'https://www.deepl.com/translator#en/ko/'+ words;

         // korequest.open('GET', kourl, true);
         // korequest.onload = function () {
         //    console.log(korequest.responseText);
         // }
         // korequest.send();
         
      };
      request.send();

   
   }, []);




   return (
      <Layout header containName='view'>
         <div className="count-wrap">
            <div className="count">항목수
               <div className="num-area"><span>2</span>/<span>100</span></div>
            </div>

            {pathname.startsWith('Challenge') && (
               <div className="count wrong">오답수
                  <div className="num-area"><span>2</span>/<span>100</span></div>
               </div>
            )}
         </div>

         <div className="card">
            <div className="front">
               <p className="grammar">명사</p>
               <strong className="word">　</strong>
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