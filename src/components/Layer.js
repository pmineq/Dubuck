import React from 'react';





const Layer = ({layerName='', title, children}) => {
  return (
    <div id="layer" className={layerName}>
      <div className='layer-wrap'>
        <div className='layer-header'>
          <button type='button' className='layer-close' onClick={close}><span className='visuallyhidden'>닫기</span></button>
          <strong className='layer-title'>{title}</strong>
        </div>
        <div className="layer-body">
          {children}
        </div>
        <div className='layer-btn'>
          <button type='button' className='btn' onClick={agree}>동의하기</button>
        </div>
      </div>
    </div>
  );

  function close() {
    document.querySelectorAll('.' + Object.values({layerName})[0])[0].style.display = "none";
  }
  
  function agree() {    
    document.getElementById(Object.values({layerName})[0]).checked = true;
    document.querySelectorAll('.' + Object.values({layerName})[0])[0].style.display = "none";
  }
}

export default Layer;