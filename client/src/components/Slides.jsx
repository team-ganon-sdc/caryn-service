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
  <div className="carousel-inner">
    {props.images.map((image, i) => {
      const isCurrent = i === props.currentSlide ?
      <div className="item active">
     <span > <SingleSlide image={image} key={i} index={i}/> </span>
     </div> :
     <div className="item">
     <span > <SingleSlide image={image} key={i} index={i}/> </span>
     </div>
    })
  }
  </div>
);

export default Slides;


{/* <div className="slideshow" style={{
  margin: '1cm'
}}>
  {props.images.map((image, i) => {
     i === 0 ?
    <div className="item active">
   <span key={i}> <SingleSlide image={image} key={i} index={i}/> </span>
   </div> :
   <div className="item">
   <span key={i}> <SingleSlide image={image} key={i} index={i}/> </span>
   </div>
  })
}
</div> */}