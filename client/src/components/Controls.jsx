import React from 'react';

const Controls = props => (
  <div>
    <div id="myControl" className="controls">
      <span onClick={props.closeControl} className="close cursor">&times;</span>

      <div className="control-content">

        <div className="mySlides">
          <div className="numbertext">{props.appId + 1} / {props.images.length}</div>
          <img className="carousel-image" src={props.images[props.appId]}/>
        </div>

        <a className="prev" onClick={props.goToPrevSlide} >&#10094;</a>
        <a className="next" onClick={props.goToNextSlide} >&#10095;</a>

        {props.images.map((image, i) => <div className="column" key={i}>
          <img className="demo cursor" src={image[i]} index={i} onClick={props.clickHandler}/>
        </div>)}

      </div>
    </div>
  </div>
);

export default Controls;


