import React from 'react';
import App from './src/components/App.jsx';
import ImageCarousel from './src/components/ImageCarousel.jsx';
import { shallow } from '../enzyme.config.js';

describe('Components should exist', () => {
  it('Component App should exist', () => {
    const wrapper = shallow(<ImageCarousel />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Component SingleSlide should exist', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });


  it('Component Slides should exists', () => {
    const wrapper = shallow(<Slides/>);
    expect(wrapper.exists()).toBe(true);
  });
});
