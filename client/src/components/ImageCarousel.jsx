import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import _ from 'underscore';



export default class ImageCarousel extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      activeItemIndex: 0

    }

    this.changeActiveItem = this.changeActiveItem.bind(this)
  }


componentDidMount () {
  var appId = 1
  axios.get(`/carousels/${appId}`).then((data) => {
    const results = data.data[0].images
    console.log('data: ', data.data[0].images)
    }).catch(err => console.log(err));
}

  UNSAFE_componentWillMount() {

    var appId = 1
    axios.get(`/carousels/${appId}`).then((data) => {
      this.setState({
        items: data.data[0].images,
        activeItemIndex: 0
      })
      console.log('data: ', data.data[0].images.length)
      }).catch(err => console.log(err));

}


  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });



  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div className="contents" style={{
        width: '650px'
      }}>
        <ItemsCarousel

    enablePlaceholder={false}
    numberOfPlaceholderItems={3}
    numberOfCars={3.5}
    infiniteLoop={false}
    gutter={1}
    activePosition={'center'}
    chevronWidth={35}
    disableSwipe={false}
    alwaysShowChevrons={false}
    numberOfCards={3}
    slidesToScroll={3.5}
    outsideChevron={true}
    showSlither={true}
    firstAndLastGutter={false}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={<div className="chevron-arrow-right"></div>}
    leftChevron={<div className="chevron-arrow-left"></div>}
  >
  {Array.from(new Array(14)).map((_, i) =>
  <div className = 'carousel-img'
    key={i}
    style={{
      height: 300,
      width: 180,
      background: `url(${this.state.items[i]})` || `url(https://i.picsum.photos/id/63${Math.floor(Math.random() * 9)}/180/300.jpg)`
    }}
  />
)}
  </ItemsCarousel>
      </div>
    );
  }
}

