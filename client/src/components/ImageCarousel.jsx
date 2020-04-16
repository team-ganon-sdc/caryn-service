import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import _ from 'underscore';



export default class ImageCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      activeItemIndex: 0

    }

    this.changeActiveItem = this.changeActiveItem.bind(this)
  }


componentDidMount () {
  let endPoint = window.location.href.split('=')[1];
  axios.get(`http://52.53.152.134:3003/carousels/${endPoint}`).then((data) => {
      this.setState({
        items: data.data[0].images.split(','),
        activeItemIndex: 0
      })
      }).catch(err => console.log(err));
}

//   UNSAFE_componentWillMount() {
//     let endPoint = window.location.href.split('=')[1];
//     axios.get(`http://localhost:3003/carousels/${endPoint}`).then((data) => {
//       this.setState({
//         items: data.data[0].images.split(','),
//         activeItemIndex: 0
//       })
//       }).catch(err => console.log(err));

// }


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
    slidesToScroll={1}
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
      background: `url(${this.state.items[i]})`
    }}
  />
)}
  </ItemsCarousel>
      </div>
    );
  }
}

