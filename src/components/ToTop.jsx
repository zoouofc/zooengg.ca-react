import React, { useState, useEffect } from 'react';

import { FaAngleUp } from 'react-icons/fa';

import '../styles/ToTop.scss';

const ToTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 25){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 25){
      setShowScroll(false)
    }
  };

  const useEffect = () => {
    console.log("clicked");
    window.scrollTo(0,0);
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <button
        className="to-top"
        title="Go to top"
        onClick={useEffect}
        style={{display: showScroll ? 'flex' : 'none'}}
      >
        <FaAngleUp />
      </button>
    </>
  )
}

export default ToTop
