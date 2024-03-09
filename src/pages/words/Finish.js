import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';

import '../../assets/scss/challenge.scss';



const Finish = (props) => {
   const pathname = useLocation().pathname.substring(1);

   if(pathname.startsWith('Study')) {
      return(
         <Layout header containName='finish study'>
            <strong className="finish-text">수고하셨습니다.<br/>오늘도 힘차게 두벅!</strong>
            <Link to="/Study/View" className="btn btn-line">단어 복습</Link>
            <Link to="/Challenge" className="btn btn-white">챌린지 도전</Link>
         </Layout>
      );
   } else if(pathname.startsWith('Challenge')) {
      return (
         <Layout header containName='finish challenge'>
            <strong className="finish-text">챌린지가<br/>완료 되었습니다<i className="icon-flag"></i></strong>
            <p><span>김두벅</span>님 챌린지 도전은 <span>1</span>번째 입니다.<br/>앞으로의 성장이 기대됩니다</p>
            <Link to="/Challenge/Result" className="btn btn-white">점수 확인하기</Link>
         </Layout>
      );
   }
};



export default Finish;