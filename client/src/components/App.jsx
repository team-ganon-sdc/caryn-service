import React from 'react';
import axios from 'axios';
import Slides from './Slides.jsx';
import seed_data from '../../../database/seed_data.js'
// import Controls from './Controls.jsx';
// import $ from 'jquery';
// import '../..dist/styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appId: 1,
      images: seed_data[1].images,
      imageInd: 0
    };
  }

  componentDidMount = () => {
  const Id = window.location.pathname.split('/')[2];
   axios.get(`/carousels/${Id}/images`)
   .then(res => (
    this.setState({
      images: res.data[0].images,
    })
  ))
  .catch(ere => console.log(err));
  }

  goToPrevSlide = () => {
    if (this.state.imageInd !== 0) {
      this.setState({
        imageInd: this.state.imageInd - 1,
      });
    }
  }

  goToNextSlide = () => {
    if (this.state.imageInd !== this.state.images.length - 1) {
      this.setState({
        imageInd: this.state.imageInd + 1,
      });
    }
  }

  clickHandler = (e) => {
    if (e.target.getAttribute('index') !== this.state.imageInd) {
      this.setState({
        imageInd: Number(e.target.getAttribute('index')),
        // modal: true,
      });
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    // const renderModal = this.state.modal ? <Modal goToNextSlide={this.goToNextSlide}
    //   goToPrevSlide={this.goToPrevSlide}
    //   closeModal={this.closeModal}
    //   appId={this.state.appId}
    //   images={this.state.images}
    //   clickHandler={this.clickHandler} />
    //    <Slides images={this.state.images} clickHandler={this.clickHandler} />;

    return (
      <div>
      <Slides images={this.state.images} clickHandler={this.clickHandler} />;

      </div>
    );
  }
}

export default App;
// window.Images = App;
