import React from 'react';
import axios from 'axios';
import Slides from './Slides.jsx';
import seed_data from '../../../database/seed_data.js'
// import Modal from './Modal.jsx';
// import '/../..dist/styles/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      appInd: seed_data[0].id,
      images: seed_data[0].images,
      imageInd: seed_data[0].images[1]
    };
  }

  componentDidMount = () => {
    // const Id = window.location.pathname.split('/')[2];
    axios.get(`/carousels/`)
      .then()
      .then(res => (
        this.setState({
          images: seed_data[appInd].images
        })
      ))
      .catch(err => console.log(`error with get request ${err}`));
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

  // closeModal = () => {
  //   this.setState({ modal: false });
  // }

  render() {
    // const renderModal = this.state.modal ? <Modal goToNextSlide={this.goToNextSlide}
    //   goToPrevSlide={this.goToPrevSlide}
    //   closeModal={this.closeModal}
    //   appInd={this.state.appInd}
    //   images={this.state.images}
    //   clickHandler={this.clickHandler} />
      //  <Slides images={this.state.images} clickHandler={this.clickHandler} />;

    return (
      <div>
      <Slides images={this.state.images} clickHandler={this.clickHandler} />;

      </div>
    );
  }
}

export default App;
// window.Images = App;
