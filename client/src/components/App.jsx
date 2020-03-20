import React from 'react';
import axios from 'axios';
import ImageCarousel from './ImageCarousel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    };

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

  render() {
    return (
      <div id="contents" style={{"padding":"60px 60px","maxWidth":700,"margin":"0 auto"}}>
      <ImageCarousel />
      <p id="description-text" style={{
        marginBottom: '2cm'
      }}>{this.state.description} </p>
      <p id="readmore" style={{
        color: 'green'
      }}><strong>READ MORE</strong></p>


      </div>
    );
  }
}

export default App;


