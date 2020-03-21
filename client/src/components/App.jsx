import React from 'react';
import axios from 'axios';
import ImageCarousel from './ImageCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      features: '',
      lines: '',
      additionalText1: '',
      additionalText2: '',
      additionalText3: '',
      readMore: 'READ MORE'
    };
    this.toggleAdditionalText = this.toggleAdditionalText.bind(this);

  }

  componentDidMount = () => {
    var id = 2;
   axios.get(`/carousels/${id}`)
   .then((data) => {
     console.log(`data: ${JSON.stringify(data)}`)
     console.log(`data length: ${data.length}`)
     console.log(`data.images: ${data.data.app_description}`)
    this.setState({
      description: data.data.app_description,
      features: '',
      lines: (data.data.additional_text).split('\n'),
      additionalText1: '',
      additionalText2: '',
      additionalText3: ''
    })
   })
  .then( () => (
    console.log('get req successful')
  ))
  .catch(err => console.log(err));
  }

  toggleAdditionalText(){
    if(this.state.additionalText1 === ''){
      this.setState({
        features: this.state.lines[0],
        additionalText1: this.state.lines[1],
         additionalText2: this.state.lines[2],
         additionalText3: this.state.lines[3],
        readMore: 'COLLAPSE'
      })
    } else {
      this.setState({
        features: '',
        additionalText1: '',
        additionalText2: '',
        additionalText3: '',
        readMore: 'READ MORE'
      })
    }

  }

  render() {
    return (
      <div className="carouselContents">
      <ImageCarousel />
      <div className="container">
      <p className="description-text">{this.state.description} </p>
      <p className="description-text" id="feature">{this.state.features}</p>
      <p className="description-text" id="addText1">{this.state.additionalText1}</p>
      <p className="description-text" id="addText2">{this.state.additionalText2}</p>
      <p className="description-text" id="addText3">{this.state.additionalText3}</p>
      <p id="readmore" style={{
        color: 'green'
      }} onClick={this.toggleAdditionalText}><strong>{this.state.readMore}</strong></p>
      </div>



      </div>
    );
  }
}

export default App;


