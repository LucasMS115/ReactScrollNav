import React, {useState} from 'react';
import {animateScroll as scroll} from 'react-scroll';

const TopBtn = () => {

    const [color, setColor] = useState('#272626');

    const btnStyle = {
        position: 'fixed',
        right: '2rem',
        bottom: '4rem',
        height: '4rem',
        width: '4rem',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
    }

    const textStyle = {
      color: 'white',
      margin: 'auto'
    }

    const mouseEnter = () => {
        setColor('#333333');
    };

    const mouseLeave = () => {
        setColor('#272626');
    };

  
  return (
    <div
     style={btnStyle}
     className='mobile-hidden'
     onClick={() => scroll.scrollToTop()}
     onMouseEnter={mouseEnter}
     onMouseLeave={mouseLeave}
    >
        <span style={textStyle}>Top</span>
    </div>
  );
}

export default TopBtn;
