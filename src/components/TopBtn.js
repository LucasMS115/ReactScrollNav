import {animateScroll as scroll} from 'react-scroll';

const TopBtn = () => {

  const btnStyle = {
      position: 'fixed',
      right: '2rem',
      bottom: '4rem',
      height: '4rem',
      width: '4rem',
      borderRadius: '50%',
      backgroundColor: '#272626',
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
  }

  const textStyle = {
      color: 'white',
      margin: 'auto'
  }

  return (
    <div style={btnStyle} className='mobile-hidden' onClick={() => scroll.scrollToTop()}>
        <span style={textStyle}>Top</span>
    </div>
  );
}

export default TopBtn;
