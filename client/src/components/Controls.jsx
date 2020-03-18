import React from 'react';
import SingleSlide from './SingleSlide.jsx';

const Controls = props => (
<div>
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
  <span className="glyphicon glyphicon-chevron-left" onClick={props.togglePrevious}></span>
  <span className="sr-only">Previous</span>
    </a>

    <a className="right carousel-control" href="#myCarousel" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" onClick={props.toggleNext}></span>
    <span className="sr-only">Next</span>
    </a>
</div>

);

export default Controls;




// <div id="center"> {props.images.map((image, i) =>
//   <div key={i}> <SingleSlide image={image} key={i} index={i}/> </div>
//  )} </div>