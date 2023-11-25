import React from 'react';
import Layout from '../../components/Layout';

const Find = (props) => {
  return (
		<Layout header={{title:'계정찾기', Backbtn:true, link:'/Login'}}>

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

        <button type="button" className="btn">인증번호 전송</button>
      </div>

      <div className="find-step02">
        <div className="input-group">
          <div className="input-wrap">
            <input type="text" id="authentication" placeholder="인증번호"/>
          </div>
          <button type="button" className="btn btn-black">인증번호 확인</button>
        </div>
        <p className="text-guide text-right">인증번호가 발송 되었습니다.<br/>발급된 인증번호를 입력하세요.</p>
        <p className="text-guide text-right text-colred">인증번호가 확인 되지 않았습니다.</p>
      </div>

      <div className="find-step03">
        <div className="input-wrap">
          <label htmlFor="pw_change">비밀번호 수정</label>
          <input type="text" id="pw_change" placeholder="********"/>
        </div>

        <button type="button" className="btn">비밀번호 수정</button>
      </div>

		</Layout>
  );
};

export default Find;