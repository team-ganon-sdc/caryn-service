import React from 'react';

// Single Slide

const SingleSlide = props => (

  <img src={props.image} alt=""  onClick={props.clickHandler} index={props.index} key={props.index}/>

);


export default SingleSlide;

