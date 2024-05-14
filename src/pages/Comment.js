import React from 'react';
import Layout from '../components/Layout';
import $ from "jquery";


//active
$(document).ready(function(){
  $('.emotion-wrap button').on('click', function(){
    $(this).addClass('active');
    $(this).parent('li').siblings().children('button').removeClass('active');
  });
})


const Comment = (props) => {
  return (
		<Layout header containName='comment'>
      <div className='comment-top'>
        <div className='comment-text'>
          <h2>소중한 의견을 들려주세요!</h2>
          <p>사용하시면서 불편한 점이 있으셨나요?<br/>
          혹은, 이런 부분을 개선됐으면 좋겠다 하는 점이 있으셨나요?<br/>
          다양한 의견을 들려주세요.</p>
        </div>

        <ul className='emotion-wrap'>
          <li>
            <button type='button' className='btn-bad'>다신 사용 안한다</button>
          </li>
          <li>
            <button type='button' className='btn-soso'>아직 잘 모르겠다</button>
          </li>
          <li>
            <button type='button' className='btn-good'>쓸만하다</button>
          </li>
        </ul>
      </div>

      <div className='comment-textarea'>
        <strong className='title'>불편 및 개선 내용</strong>
        <textarea placeholder='불편했거나 개선하길 원하는 내용을 적어주세요.'></textarea>
      </div>

      <div className='btn-bottom'>
        <button type='button' className='btn'>충고하기</button>
      </div>

		</Layout>
  );
};

export default Comment;