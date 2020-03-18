import React from 'react';

// Single Slide

const SingleSlide = props => (
  <div style={{
    width: '80%',
  }}>
    <img src={props.image} style={{
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    }} onClick={props.clickHandler} index={props.index} key={props.index}/>
  </div>
);


export default SingleSlide;