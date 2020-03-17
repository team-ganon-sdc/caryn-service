// Slides
import React from 'react';
import SingleSlide from './SingleSlide.jsx';

const Slides = props => (
  <div style={{
    height: '100px',
    width: '1200px',
    margin: '0 auto',
    display: 'flex',
    top: '350px',
  }}>
    {props.images.map((image, i) =>
      <SingleSlide image={image} key={i} index={i}/>
    )
  }
  </div>
);

export default Slides;