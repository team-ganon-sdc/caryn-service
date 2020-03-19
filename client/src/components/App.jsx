import React from 'react';
import axios from 'axios';
import ImageCarousel from './ImageCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      features: '',
      additionalText: '',
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
      description: data.data.app_description
    })
   })
  .then( () => (
    console.log('get req successful')
  ))
  .catch(err => console.log(err));
  }

  toggleAdditionalText(){
    if(this.state.additionalText === ''){
      this.setState({
        features: 'FEATURES',
        additionalText:
         '★ plz send new non silly brain plz! things are way too silly!',
         additionalText2: '★ steady havin what I believe a psychiatrist would call a "mental breakdance"',
         additionalText3: '★ when it comes to my mental brain, im just lookin 4 the right crank to pull (keep pulling the wrong cranks, turns out)',
        readMore: 'COLLAPSE'
      })
    } else {
      this.setState({
        features: '',
        additionalText: '',
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
      <p className="description-text">{this.state.additionalText}</p>
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


