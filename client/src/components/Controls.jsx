import React from 'react';
import SingleSlide from './SingleSlide.jsx';
import Slides from './Slides.jsx';

const Controls = props => (
<div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
  <span className="glyphicon glyphicon-chevron-left" onClick={props.togglePrevious}></span>
  <span className="sr-only">Previous</span>
    </a>
    <div className="item active"></div>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" onClick={props.toggleNext}></span>
    <span className="sr-only">Next</span>
    </a>
</div>

);

export default Controls;


