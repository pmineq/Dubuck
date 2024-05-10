import React from 'react';
import Layout from '../../components/Layout';
import { Popup } from '../../components/Popup';
import $ from "jquery";


const Detail = (props) => {

  $(document).ready(function(){
    $('.open-floating').on('click', function(){
      if($('.floating-wrap').hasClass('active')){
        $('.floating-wrap, .open-floating').removeClass('active');
      } else {
        $('.floating-wrap, .open-floating').addClass('active');
      }
    });


    //삭제
    $('.floating-wrap .btn-delete').on('click', function(){
      $('.popup-challenge-delete').show();
    });

    //복습
    $('.floating-wrap .btn-revise').on('click', function(){
      $('.popup-word-revise').show();
    });

    //재도전
    $('.floating-wrap .btn-retry').on('click', function(){
      $('.popup-retry').show();
    });


  });


  return (
		<Layout header={{title:'챌린지 결과', Backbtn:true, link:'/Challenge/Result'}} containName='result'>


      <Popup popupName='popup-challenge-delete' btn confirmtext='삭제'>
        챌린지 결과를<br/>
        삭제하시겠습니까?
      </Popup>

      <Popup popupName='popup-word-revise' btn confirmtext='복습'>
        영어 단어를<br/>
        복습하시겠습니까?
      </Popup>

      <Popup popupName='popup-retry' btn confirmtext='재도전'>
        다시 한번<br/>
        재 도전 하시겠습니가까?
      </Popup>

      <div className="select-wrap">
        <div className="select">
          <button type="button">전체</button>
          <ul>
            <li className="active">전체</li>
            <li>정답만</li>
            <li>오답만</li>
          </ul>
        </div>
      </div>

      <ul className="result-view">
        <li>
          <div className="english">exist</div>
          <div className="korean">존재하다<p className="wrong">살아있다</p></div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">extreme<p className="wrong">extremes</p></div>
          <div className="korean">극단</div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">original<p className="answer">ORIGINAL</p></div>
          <div className="korean">원래의</div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">soon a after</div>
          <div className="korean">곧이어<p className="answer">곧이어</p></div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">be pleased width</div>
          <div className="korean">~에 기뻐하다<p className="wrong">기뻐하다</p></div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">put aside</div>
          <div className="korean">~을 한쪽에두다<p className="answer">~을 한쪽에두다</p></div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">critical<p className="answer">criticalnal</p></div>
          <div className="korean">비판적인</div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
        <li>
          <div className="english">mistakenly<p className="answer">미스테이크</p></div>
          <div className="korean">잘못(하여)</div>
          <button type="button" className="btn-sound">사운드 재생</button>
        </li>
      </ul>

      <button type="button" className="open-floating">열기</button>

      <div className="floating-wrap">
        <div className="dim-layer"></div>
        <ul className="btn-list">
          <li>
            <button type="button" className='btn-delete'>삭제<i className="icon-delete"></i></button>
          </li>
          <li>
            <button type="button" className='btn-revise'>단어복습<i className="icon-revise"></i></button>
          </li>
          <li>
            <button type="button" className='btn-retry'>챌린지 재 도전<i className="icon-retry"></i></button>
          </li>
        </ul>
      </div>
    
  </Layout>
  
  );
};

export default Detail;