import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Layer from '../../components/Layer';
import Policy01 from '../../components/Policy01';
import Policy02 from '../../components/Policy02';

import $ from "jquery";

const Join = (props) => {

  //이용약관
  function policy01() {
    $('.policy01').show();
  }

  //마케팅약관
  function policy02() {
    $('.policy02').show();
  }

  useEffect(() => {
    //select 
    $('.select button').text($('.select ul li:first-child').text());
  
    $('.select button').on('click', function(){
      var selectUl = $(this).next('ul')
      if(selectUl.is(':visible')) {
        selectUl.hide();
      } else {
        selectUl.show();
      }
    });
  
    $('.select li').on('click', function(){
      var selectText = $(this).text();
      $(this).parent('ul').hide().siblings('button').text(selectText);
  
      if($('.select button').text() === '직접입력') {
        $('#email_direct').show().focus();
      } else {
        $('#email_direct').hide().blur();
      }
    });

  }, []);


  return (
		<Layout header={{title:'정보 입력', Backbtn:true, link:'/'}} containName='account'>

      <Layer layerName={'policy01'} title={'이용약관'}>
        <Policy01/>
      </Layer>

      <Layer layerName={'policy02'} title={'마케팅약관'}>
        <Policy02/>
      </Layer>

      <div className='join'>
        <div className="input-group">
          <div className="input-wrap">
            <label htmlFor="name_family">성</label>
            <input type="text" id="name_family" placeholder="성"/>
          </div>
          <div className="sign">/</div>
          <div className="input-wrap">
            <label htmlFor="name_given">이름</label>
            <input type="text" id="name_given" placeholder="이름"/>
          </div>
        </div>

        <div className="input-wrap">
          <label htmlFor="email">이메일</label>
          <div className="input-group">
            <div className="input-wrap">
              <input type="text" id="email" placeholder="이메일"/>
            </div>
            <div className="sign">@</div>
            <div className="input-wrap">
              <div className="select">
                <button type="button"></button>
                <ul>
                  <li>naver.com</li>
                  <li>hanmail.net</li>
                  <li>daum.net</li>
                  <li>kakao.com</li>
                  <li>gmail.com</li>
                  <li>직접입력</li>
                </ul>
              </div>
            </div>
          </div>
          <input type="text" id="email_direct" placeholder="직접 입력해주세요"/>
        </div>

        <div className="input-wrap">
          <label htmlFor="pw01">비밀번호</label>
          <input type="password" id="pw01" placeholder="********"/>
          <p className="text-guide text-colred">영문+숫자 조합 6자릿수를 입력하세요.</p>
        </div>

        <div className="input-wrap">
          <label htmlFor="pw02">비밀번호 확인</label>
          <input type="password" id="pw02" placeholder="********"/>
          <p className="text-guide text-colred">비밀번호가 틀립니다.</p>
        </div>

        <div className="input-wrap">
          <label>약관동의</label>
          <div className="check-group">
            <div className="input-check">
              <input type="checkbox" id="all_agree"/>
              <label htmlFor="all_agree">전체 동의</label>
            </div>
            <div className="input-check">
              <input type="checkbox" id="policy01"/>
              <label htmlFor="policy01">이용약관 동의 (필수)</label>
              <button type="button" className="btn-agree" onClick={policy01}><span className="visuallyhidden">약관보기</span></button>
            </div>
            <div className="input-check">
              <input type="checkbox" id="policy02"/>
              <label htmlFor="policy02" className="text-col68">마케팅약관 동의 (선택)</label>
              <button type="button" className="btn-agree" onClick={policy02}><span className="visuallyhidden">약관보기</span></button>
            </div>
          </div>
        </div>

        <button type="button" className="btn">가입하기</button>
      </div>

		</Layout>
  );
};

export default Join;