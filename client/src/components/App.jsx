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
      <div id="contents" style={{"padding":"60px 60px","maxWidth":700,"margin":"0 auto"}}>
      <ImageCarousel />
      <p className="description-text" style={{
        marginBottom: '0.8cm'
      }}>{this.state.description} </p>
      <p className="description-text">{this.state.features}</p>
      <p className="description-text">{this.state.additionalText1}</p>
      <p className="description-text">{this.state.additionalText2}</p>
      <p className="description-text">{this.state.additionalText3}</p>
      <p id="readmore" style={{
        color: 'green'
      }} onClick={this.toggleAdditionalText}><strong>{this.state.readMore}</strong></p>




      </div>
    );
  }
}

export default App;


