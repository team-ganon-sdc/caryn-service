import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlide from './components/ImageSlide.jsx';
import Carousel from './components/Carousel.jsx';
console.log('My Express React Webpack Babel Setup');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: ''
    }

  }
  render() {
    return (
      <div>
      <h1>
        your a hairy, wizard
      </h1>

      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));