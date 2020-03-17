import React from 'react';
import axios from 'axios';
import Slides from './Slides.jsx';
import seed_data from '../../../database/seed_data.js'
// import Controls from './Controls.jsx';
// import $ from 'jquery';
// import '../..dist/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount = () => {
    var id = 10;
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

  // goToNextSlide = () => {
  //   if (this.state.imageInd !== this.state.images.length - 1) {
  //     this.setState({
  //       imageInd: this.state.imageInd + 1,
  //     });
  //   }
  // }

  // clickHandler = (e) => {
  //   if (e.target.getAttribute('index') !== this.state.imageInd) {
  //     this.setState({
  //       imageInd: Number(e.target.getAttribute('index')),
  //       controls: true
  //     });
  //   }
  // };

  // closeControls = () => {
  //   this.setState({ controls: false });
  // }

  render() {
    // const renderControls = this.state.controls ? <Controls goToNextSlide={this.goToNextSlide}
    //   goToPrevSlide={this.goToPrevSlide}
    //   closeControls={this.closeControls}
    //   appId={this.state.appId}
    //   images={this.state.images}
    //   clickHandler={this.clickHandler} />
    //    : <Slides images={this.state.images} clickHandler={this.clickHandler} />;

    return (
      <div>
      <Slides images={this.state.images} clickHandler={this.clickHandler} />
      </div>
    );
  }
}

export default App;

