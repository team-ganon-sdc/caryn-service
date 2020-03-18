import React from 'react';

// Single Slide

const SingleSlide = props => (

    <img src={props.image} alt="" style="width:100%" onClick={props.clickHandler} index={props.index} key={props.index}/>

);


export default SingleSlide;



// const SingleSlide = props => (

//   <img src={props.image} style={{
//   'backgroundSize': 'contain',
//     width: '180px',
//     height: '300px',
//     cursor: 'pointer',
//   }} onClick={props.clickHandler} index={props.index} key={props.index}/>

// );