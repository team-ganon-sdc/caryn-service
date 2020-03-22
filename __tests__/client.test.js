import React from 'react';
import App from '../client/src/components/App.jsx';
import ImageCarousel from '../client/src/components/ImageCarousel.jsx';
// import { shallow } from '../enzyme.config.js';

import { shallow, mount, render } from 'enzyme';

describe('Components should exist', () => {

  it('Component Image carousel should exist', () => {
    const wrapper = shallow(<ImageCarousel />);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find(ImageCarousel).length).toEqual(1);
  });

  it('Component App should exist', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find(App).length).toEqual(1);
  });


});


    //     describe('click left chevron', () => {
    //         it('should decrease activeItemIndex by 1, when current position is above 0', () => {
    //             const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    //             c.find('leftChevron').simulate('click');

    //             expect(c.state('activeItemIndex')).toBe(0);
    //         });

    //         it('should make no change to activeItemIndex when current position is at 0', () => {
    //             const c = shallow(<ImageCarousel activeItemIndex={0} />);

    //             c.find('leftChevron').simulate('click');

    //             expect(c.state('activeItemIndex')).toBe(0);
    //         });
    //     });


    //     describe('click right chevron', () => {
    //       it('should increase activeItemIndex by 1, when current position is below length ', () => {
    //           const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    //           c.find('rightChevron').simulate('click');

    //           expect(c.state('activeItemIndex')).toBe(2);
    //       });

    //   });
    // });

