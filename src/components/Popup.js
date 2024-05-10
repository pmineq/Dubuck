import React from 'react';
import { Link } from 'react-router-dom';
// import $ from "jquery";




function tutorialClose(){
  
}


const Popup = ({popupName='', title, children, btn, confirmtext=''}) => {
  return (
    <div id="popup" className={popupName}>
      <div className='popup-wrap'>
        {title && (
          <div className='popup-header'>
            <strong className='popup-title'>{title}</strong>
            <button type='button' className='popup-close' onClick={close}><span className='visuallyhidden'>닫기</span></button>
          </div>
        )}
        <div className="popup-body">
          {children}
        </div>
        {btn && (
          <div className='popup-btn-group'>
            <button type='button' className='btn btn-confirm'>{confirmtext}</button>
            <button type='button' className='btn btn-cancel' onClick={close}>취소</button>
          </div>
        )}

      </div>
      <div className='popup-dim'></div>
    </div>
  );
  function close() {
    document.querySelectorAll('.' + Object.values({popupName})[0])[0].style.display = "none";
  }
}


// 코멘트 & 챌린지 중단
const Popup2 = ({popupName='', title, children, comment, challenge}) => {
  return (
    <div id="popup" className={'style02 ' + (popupName ? popupName:'')}>
      <div className='popup-wrap'>
        {title && (
          <div className='popup-header'>
            <strong className='popup-title'>{title}</strong>
          </div>
        )}
        <div className="popup-body">
          {children}
        </div>
        
        {comment && (
          <div className='popup-btn-group'>
            <Link to='/Comment' className='btn btn-comment'>충고하기</Link>
          </div>
        )}
          
        {challenge && (
          <div className='popup-btn-group'>
            <button type='button' className='btn btn-cancle'>공부 끝내기</button>
            <button type='button' className='btn btn-challenge'>아직 더풀래</button>
          </div>
        )}

      </div>
      <div className='popup-dim'></div>
    </div>
  );
}


// 튜토리얼
const Popup3 = ({popupName='', title, children}) => {
  return (
    <div id="popup" className={'style03 ' + (popupName ? popupName:'')}>
      <div className='popup-wrap'>
        {title && (
          <div className='popup-header'>
            <strong className='popup-title'>{title}</strong>
            <button type='button' className='popup-close' onClick={tutorialClose}><span className='visuallyhidden'>닫기</span></button>
          </div>
        )}
        <div className="popup-body">
          {children}
        </div>
          
        <div className='popup-btn-group'>
          <button type='button' className='btn btn-next'>다음</button>
        </div>

      </div>
    </div>
  );
}





export {Popup, Popup2, Popup3} ;