import React from 'react';
import SingleSlide from './SingleSlide.jsx';

const Controls = props => (
  <div className="slideshow">
    <tr className="controls">
    <td className="previous" onClick={props.togglePrevious}>&#10094;</td>
    {props.images.map((image, i) =>
     <td key={i}> <SingleSlide image={image} key={i} index={i}/> </td>
    )}
    <td className="next" onClick={props.toggleNext}>&#10095;</td>
  </tr>
  </div>
);

export default Controls;
