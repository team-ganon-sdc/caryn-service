import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlide from './components/ImageSlide.jsx';
import Carousel from './components/Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ''
    }

  }

}


ReactDOM.render(<App />, document.getElementById('app'));