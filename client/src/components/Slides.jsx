// Slides
import React from 'react';
import SingleSlide from './SingleSlide.jsx';

// const Slides = props => (
// <span>
//     {props.images.map((image, i) =>
//       <SingleSlide image={image} key={i} index={i}/>
//     )
//   }
//   </span>
// );

// export default Slides;

const Slides = props => (
<div className="carousel-inner" role="listbox">
      <div className="item active">
        <img src={props.images[0]} alt="" width="180" height="300"/>
      </div>

      <div className="item">
        <img src={props.images[1]} alt="" width="180" height="300"/>
      </div>

      <div className="item">
        <img src={props.images[2]} alt="" width="180" height="300"/>
      </div>

      <div className="item">
        <img src={props.images[0]} alt="" width="180" height="300"/>
      </div>
  </div>
);

export default Slides;

