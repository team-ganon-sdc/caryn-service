import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlide from './components/ImageSlide.jsx';
import Carousel from './components/Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: console.log('state index.js')
    }

  }

}


ReactDOM.render(<App />, document.getElementById('app'));