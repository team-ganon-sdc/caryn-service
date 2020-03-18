import React from 'react';
import axios from 'axios';
import Slides from './Slides.jsx';
import seed_data from '../../../database/seed_data.js'
import Controls from './Controls.jsx';
// import '../..dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentSlide: 0,
      controls: true
    };
  }

  componentDidMount = () => {
    var id = 1;
   axios.get(`/carousels/${id}`)
   .then((data) => {
     console.log(`data: ${JSON.stringify(data)}`)
     console.log(`data length: ${data.length}`)
     console.log(`data.images: ${data.data.images}`)
    this.setState({
      images: data.data.images
    })
   })
  .then( () => (
    console.log('get req successful')
  ))
  .catch(err => console.log(err));
  }

  // goToPrevSlide = () => {
  //   if (this.state.imageInd !== 0) {
  //     this.setState({
  //       imageInd: this.state.imageInd - 1,
  //     });
  //   }
  // }

  togglePrevious = () => {
    console.log("toggleprevious click!");
    var current = this.state.currentSlide;
    var previous = current - 1;
    if (previous < 0) {
      previous = this.state.images.length - 1;
    }
    this.setState({
      currentSlide: previous
    })
    console.log('currentSlide', this.state.currentSlide)
  }

  // goToNextSlide = () => {
  //   if (this.state.imageInd !== this.state.images.length - 1) {
  //     this.setState({
  //       imageInd: this.state.imageInd + 1,
  //     });
  //   }
  // }

  toggleNext = () => {
    console.log("togglenext click!");
    var current = this.state.currentSlide;
    var next = current + 1;
    if (next > this.state.images.length - 1) {
      next = 0;
    }
    this.setState({
      currentSlide: next
    })
    console.log('currentSlide', this.state.currentSlide)
  }


  render() {
    return (
      <Controls toggleNext={this.toggleNext}
      togglePrevious={this.togglePrevious}
      currentSlide={this.state.currentSlide}
      images={this.state.images} />
    );
  }
}

export default App;

