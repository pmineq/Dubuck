import React from 'react';
import Layout from '../../components/Layout';

const Join = (props) => {
  return (
		<Layout header={{title:'회원가입', Backbtn:true, link:'/'}}>

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
        <input type="text" id="email_input" placeholder="직접 입력해주세요"/>
      </div>

      <div className="input-wrap">
        <label htmlFor="pw01">비밀번호</label>
        <input type="password" id="pw01" placeholder="********"/>
      </div>

      <div className="input-wrap">
        <label htmlFor="pw02">비밀번호 확인</label>
        <input type="password" id="pw02" placeholder="********"/>
      </div>

      <div className="input-wrap">
        <label>약관동의</label>
        <div className="check-group">
          <div className="input-check">
            <input type="checkbox" id="all_agree"/>
            <label htmlFor="all_agree">전체 동의</label>
          </div>
          <div className="input-check">
            <input type="checkbox" id="agree01"/>
            <label htmlFor="agree01">이용약관 동의 (필수)</label>
            <button type="button" className="btn-agree" data-pop="policy01"><span className="visuallyhidden">약관보기</span></button>
          </div>
          <div className="input-check">
            <input type="checkbox" id="agree02"/>
            <label htmlFor="agree02" className="text-col68">마케팅약관 동의 (선택)</label>
            <button type="button" className="btn-agree" data-pop="policy02"><span className="visuallyhidden">약관보기</span></button>
          </div>
        </div>
      </div>

      <button type="button" className="btn">가입하기</button>


		</Layout>
  );
};

export default Join;