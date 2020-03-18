// Slides
import React from 'react';
import SingleSlide from './SingleSlide.jsx';

const Slides = props => (
  <tr className="slideshow">
    {props.images.map((image, i) =>
     <td> <SingleSlide image={image} key={i} index={i}/> </td>
    )
  }
  </tr>
);

export default Slides;