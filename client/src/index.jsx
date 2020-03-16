
import React from 'react';
import ReactDOM from 'react-dom';
var data = require('../../database/seed_data.js');
const imagesData = require('../../database/seed_data');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide: 0,  // index from seed data
      data: data,
      console: console.log('this.state index.jsx')
    }
  }


  componentDidMount(lastProps, lastState) {
    console.log('index.jsx');
    $.ajax({
      type: 'GET',
      url: '/carousel',
      success: (data) => {
        this.setState({ data: data });
        console.log('GET req successful, got posts, this.state.data', this.state.data);
      }
    });
  }

  // Slideshow Component
var Slideshow = React.createClass({
  render: function() {
    return (
      <div className="slideshow">
      <p>index.js</p>
      </div>
    );
  }
});

}

ReactDOM.render(<App />, document.getElementById('app'));


// import MediaLoader from './components.MediaLoader.jsx';

// import PropTypes from 'prop-types';
// // import {
// //   classToModules,
// //   getClassName,
// // } from '../../helpers/components';

// const ROOTELM = 'aws-frm';

// export default class AwesomeFrame extends React.Component {
//   static propTypes = {
//     cssModule: PropTypes.object,
//     children: PropTypes.node,
//     className: PropTypes.string,
//     rootElement: PropTypes.string,
//     title: PropTypes.string,
//     disabled: PropTypes.bool,
//   };
//   static defaultProps = {
//     cssModule: null,
//     children: null,
//     className: null,
//     title: null,
//     rootElement: ROOTELM,
//     disabled: false,
//   };
//   constructor(props) {
//     super(props);
//     this.rootElement = props.rootElement || ROOTELM;
//     this.state = {
//     };
//   }

//   getRootClassName() {
//     const { rootElement } = this;
//     const {
//       cssModule,
//       disabled,
//       className,
//     } = this.props;
//     let classNames = [
//       this.rootElement,
//     ];
//     if (disabled === true) {
//       classNames.push(`${rootElement}--disabled`);
//     }
//     if (cssModule && cssModule[this.rootElement]) {
//       classNames = classToModules(classNames, cssModule);
//     }
//     if (className) {
//       classNames.push(...className.split(' '));
//     }
//     return classNames.join(' ').trim().replace(/[\s]+/ig, ' ');
//   }

//   renderBar() {
//     const {
//       title,
//       cssModule,
//     } = this.props;
//     return (
//       <div
//         ref={(container) => { this.container = container; }}
//         className={getClassName(`${this.rootElement}__title-bar`, cssModule)}
//       >
//         <div className={getClassName(`${this.rootElement}__title-bar__controls`, cssModule)}>
//           <span />
//           <span />
//           <span />
//         </div>
//         {title && (
//           <p>
//             {title}
//           </p>
//         )}
//       </div>
//     );
//   }

//   render() {
//     const {
//       children,
//     } = this.props;
//     return (
//       <div
//         className={this.getRootClassName()}
//       >
//         {this.renderBar()}
//         {children}
//       </div>
//     );
//   }
// }



// const { Component } = React;
// const { render } = ReactDOM;

// const carouselContainer = document.querySelector(".carousel-container");

// // Data for carousel
// const carouselSlidesData = [
//   {
//     content:
//       "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
//     author: "Bane",
//     source: "facebook"
//   }, {
//     content:
//       "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
//     author: "Ra's Al Ghul",
//     source: "Snapchat"
//   }, {
//     content:
//       "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
//     author: "Joker",
//     source: "facebook"
//   }, {
//     content:
//       "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
//     author: "Bruce Wayne",
//     source: "facebook"
//   }, {
//     content:
//       "But it's not who you are underneath... it's what you do that defines you.",
//     author: "Rachel Dawes",
//     source: "twitter"
//   }, {
//     content:
//       "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
//     author: "John Blake",
//     source: "Google+"
//   }, {
//     content:
//       "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
//     author: "Alfred Pennyworth",
//     source: "twitter"
//   }
// ];

// // Component for left arrow
// class CarouselLeftArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--left"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-left" />
//       </a>
//     );
//   }
// }

// // Component for right arrow
// class CarouselRightArrow extends Component {
//   render() {
//     return (
//       <a
//         href="#"
//         className="carousel__arrow carousel__arrow--right"
//         onClick={this.props.onClick}
//       >
//         <span className="fa fa-2x fa-angle-right" />
//       </a>
//     );
//   }
// }

// // Component for carousel indicator
// class CarouselIndicator extends Component {
//   render() {
//     return (
//       <li>
//         <a
//           className={
//             this.props.index == this.props.activeIndex
//               ? "carousel__indicator carousel__indicator--active"
//               : "carousel__indicator"
//           }
//           onClick={this.props.onClick}
//         />
//       </li>
//     );
//   }
// }

// // Component for slide
// class CarouselSlide extends Component {
//   render() {
//     return (
//       <li
//         className={
//           this.props.index == this.props.activeIndex
//             ? "carousel__slide carousel__slide--active"
//             : "carousel__slide"
//         }
//       >
//         <p className="carousel-slide__content">{this.props.slide.content}</p>

//         <p>
//           <strong className="carousel-slide__author">
//             {this.props.slide.author}
//           </strong>,
//           {" "}
//           <small className="carousel-slide__source">
//             {this.props.slide.source}
//           </small>
//         </p>
//       </li>
//     );
//   }
// }

// // Carousel component
// class Carousel extends Component {
//   constructor(props) {
//     super(props);

//     this.goToSlide = this.goToSlide.bind(this);
//     this.goToPrevSlide = this.goToPrevSlide.bind(this);
//     this.goToNextSlide = this.goToNextSlide.bind(this);

//     this.state = {
//       activeIndex: 0
//     };
//   }

//   goToSlide(index) {
//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToPrevSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length;

//     if (index < 1) {
//       index = slidesLength;
//     }

//     --index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   goToNextSlide(e) {
//     e.preventDefault();

//     let index = this.state.activeIndex;
//     let { slides } = this.props;
//     let slidesLength = slides.length - 1;

//     if (index === slidesLength) {
//       index = -1;
//     }

//     ++index;

//     this.setState({
//       activeIndex: index
//     });
//   }

//   render() {
//     return (
//       <div className="carousel">
//         <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

//         <ul className="carousel__slides">
//           {this.props.slides.map((slide, index) =>
//             <CarouselSlide
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               slide={slide}
//             />
//           )}
//         </ul>

//         <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

//         <ul className="carousel__indicators">
//           {this.props.slides.map((slide, index) =>
//             <CarouselIndicator
//               key={index}
//               index={index}
//               activeIndex={this.state.activeIndex}
//               onClick={e => this.goToSlide(index)}
//             />
//           )}
//         </ul>
//       </div>
//     );
//   }
// }

// // Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);








// import React from 'react';
// import ReactDOM from 'react-dom';
// import ImageSlide from './components/ImageSlide.jsx';
// import Carousel from './components/Carousel.jsx';
// console.log('My Express React Webpack Babel Setup');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentImage: ''
//     }

//   }
//   render() {
//     return (
//       <div>
//       <h1>
//         your a hairy, wizard
//       </h1>

//       </div>
//     )
//   }

// }


// ReactDOM.render(<App />, document.getElementById('app'));