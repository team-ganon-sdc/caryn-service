import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import axios from 'axios';
import _ from 'underscore'


export default class ImageCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      children: [],
      activeItemIndex: 0

    }

    // this.changeActiveItem = this.changeActiveItem.bind(this);
  }

  componentWillMount(){}
  componentDidMount(){}
  componentWillUnmount(){}

  componentWillReceiveProps(){}
  shouldComponentUpdate(){}
  componentWillUpdate(){}


componentDidUpdate () {
  var appId = 2
  axios.get(`/carousels/${appId}`).then((data) => {
    this.setState({
      children: data.data[0].images,
      activeItemIndex: 0
    })
    console.log('data: ', data.data[0].images);

    }).catch(err => console.log(err));
}

//   UNSAFE_componentWillMount() {
//       this.setState({
//         children: this.pictures,
//         activeItemIndex: 0
//       })
// }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  // createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);


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
    numberOfCars={3}
    infiniteLoop={false}
    gutter={3}
    activePosition={'center'}
    chevronWidth={35}
    disableSwipe={false}
    alwaysShowChevrons={false}
    // numberOfCards={3}
    slidesToScroll={3}
    outsideChevron={true}
    showSlither={true}
    firstAndLastGutter={false}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={<div className="chevron-arrow-right"></div>}
    leftChevron={<div className="chevron-arrow-left"></div>}
  >
    {Array.from(new Array(15)).map((_, i) =>
      <div className = 'carousel-img'
        key={i}
        style={{
          height: 300,
          width: 180,
          background: `url(https://i.picsum.photos/id/44${Math.floor(Math.random() * 9)}/180/300.jpg)` || `url(https://i.picsum.photos/id/63${Math.floor(Math.random() * 9)}/180/300.jpg)`
        }}
      />
    )}
  </ItemsCarousel>
      </div>
    );
  }
}















// import React from 'react';
// import ImageCarousel from 'react-children-carousel';


// export default class ImageCarousel extends React.Component {

//   UNSAFE_componentWillMount() {
//     this.setState({
//       children: [],
//       activeItemIndex: 0,
//     });

//     setTimeout(() => {
//       this.setState({
//         children: ['https://picsum.photos/seed/picsum/200/300', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/757/180/300.jpg'],
//       })
//     }, 100);
//   }

//   changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

//   render() {
//     const {
//       activeItemIndex,
//       children,
//     } = this.state;

//     return (
//       <div className="contents" style={{
//         width: '650px'
//       }}>
//         <ImageCarousel
//     placeholderItem={<div style={{ height: 200, background: 'url(https://picsum.photos/seed/picsum/200/300)' }} />}
//     enablePlaceholder={true}
//     numberOfPlaceholderItems={3}
//     infiniteLoop={false}
//     gutter={5}
//     activePosition={'center'}
//     chevronWidth={35}
//     disableSwipe={false}
//     alwaysShowChevrons={false}
//     numberOfCards={2}
//     slidesToScroll={2.5}
//     outsideChevron={true}
//     showSlither={true}
//     firstAndLastGutter={true}
//     activeItemIndex={this.state.activeItemIndex}
//     requestToChangeActive={value => this.setState({ activeItemIndex: value })}
//     rightChevron={<div className="chevron-arrow-right"></div>}
//     leftChevron={<div className="chevron-arrow-left"></div>}
//   >
//     {Array.from(new Array(10)).map((_, i) =>
//       <div
//         key={i}
//         style={{
//           height: 300,
//           background: `url(https://i.picsum.photos/id/44${i}/180/300.jpg)` || `url(https://i.picsum.photos/id/63${i}/180/300.jpg)`
//         }}
//       />
//     )}
//   </ImageCarousel>
//       </div>
//     );
//   }
// }