import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../../components/Layout';

import '../../assets/scss/challenge.scss';



const Challenge = (props) => {
   const pathname = useLocation().pathname.substring(1);

   return (
      <Layout header containName='start'>
         <strong className="start-text">
            {pathname.startsWith('Challenge') && (<>오늘은</>)}
            <input type="text"/>
            {pathname.startsWith('Study') ? (<>단어<br/>공부해볼까?</>) : (<>문항으로<br/>챌린지 시작해볼까?</>) }
         </strong>
         {pathname.startsWith('Study') ? (<Link to="/Study/View" className="btn btn-white">START</Link>) : (<Link to="/Challenge/View" className="btn btn-white">START</Link>)}
         
      </Layout>
   );

};

export default Challenge;