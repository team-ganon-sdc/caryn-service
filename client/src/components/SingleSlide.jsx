import React from 'react';

// Single Slide

const SingleSlide = props => (
  <div style={{
    width: '10%',
  }}>
    <img src={props.image} style={{
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    }} index={props.index}/>
  </div>
);


export default SingleSlide;