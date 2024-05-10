import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import { Popup } from '../../components/Popup';
import $ from "jquery";

const Find = (props) => {

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



  function step01() {
    $('.find-step01').find('.btn').hide();
    $('.find-step02').show();
  }

  function step02() {
    $("#authentication").prop('disabled', true);
    $('.find-step03').show();
  }

  function reset() {
    $('.edit-pw').show();
  }


  return (
		<Layout header={{title:'계정찾기', Backbtn:true, link:'/Login'}} containName='account'>

      <Popup popupName='no-mail' btn confirmtext='확인'>
        등록된 이메일이 없습니다.<br/>
        회원가입 후 이용하세요.
      </Popup>

      <Popup popupName='edit-pw' btn confirmtext='확인'>
        비밀번호를<br/>수정하시겠습니까?
      </Popup>

			<div className="find-step01">
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

        <button type="button" className="btn" onClick={step01}>인증번호 전송</button>
      </div>

      <div className="find-step02">
        <div className="input-group">
          <div className="input-wrap">
            <input type="text" id="authentication" placeholder="인증번호"/>
          </div>
          <button type="button" className="btn btn-black" onClick={step02}>인증번호 확인</button>
        </div>
        <p className="text-guide text-right">인증번호가 발송 되었습니다.<br/>발급된 인증번호를 입력하세요.</p>
        <p className="text-guide text-right text-colred">인증번호가 확인 되지 않았습니다.</p>
      </div>

      <div className="find-step03">
        <div className="input-wrap">
          <label htmlFor="pw_change">비밀번호 수정</label>
          <input type="password" id="pw_change" placeholder="********"/>
        </div>

        <button type="button" className="btn" onClick={reset}>비밀번호 수정</button>
      </div>

		</Layout>
  );
};

export default Find;