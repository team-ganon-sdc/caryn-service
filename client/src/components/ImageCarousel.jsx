import React from 'react';
import ItemsCarousel from 'react-items-carousel';


export default class ImageCarousel extends React.Component {

  UNSAFE_componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });

    setTimeout(() => {
      this.setState({
        children: ['https://picsum.photos/seed/picsum/200/300', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/757/180/300.jpg'],
      })
    }, 100);
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;

    return (
      <div className="contents">
        <ItemsCarousel
    placeholderItem={<div style={{ height: 200, background: 'url(https://picsum.photos/seed/picsum/200/300)' }} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    infiniteLoop={false}
    gutter={5}
    activePosition={'center'}
    chevronWidth={70}
    disableSwipe={false}
    alwaysShowChevrons={false}
    numberOfCards={2}
    slidesToScroll={2.5}
    outsideChevron={true}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={<a className="next">&#10095;</a>}
    leftChevron={<a className="prev">&#10094;</a>}
  >
    {Array.from(new Array(10)).map((_, i) =>
      <div
        key={i}
        style={{
          height: 300,
          background: `url(https://i.picsum.photos/id/44${i}/400/300.jpg)` || `url(https://i.picsum.photos/id/63${i}/180/300.jpg)`
        }}
      />
    )}
  </ItemsCarousel>
      </div>
    );
  }
}