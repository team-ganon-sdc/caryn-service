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
        children: ['https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/757/180/300.jpg'],
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
      <div id="contents" style={{"padding":"60px 60px","maxWidth":700,"margin":"0 auto"}}>
        <ItemsCarousel
    placeholderItem={<div style={{ height: 200, background: 'url(https://i.picsum.photos/id/737/180/300.jpg)' }} />}
    enablePlaceholder={true}
    numberOfPlaceholderItems={3}
    infiniteLoop={false}
    gutter={12}
    activePosition={'center'}
    chevronWidth={80}
    disableSwipe={false}
    alwaysShowChevrons={true}
    numberOfCards={2}
    slidesToScroll={2}
    outsideChevron={true}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={'>'}
    leftChevron={'<'}
  >
    {Array.from(new Array(10)).map((_, i) =>
      <div
        key={i}
        style={{
          height: 200,
          background: `url(https://i.picsum.photos/id/44${i}/180/300.jpg)` || `url(https://i.picsum.photos/id/63${i}/180/300.jpg)`
        }}
      />
    )}
  </ItemsCarousel>
      </div>
    );
  }
}