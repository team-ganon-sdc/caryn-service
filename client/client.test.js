import React from 'react';
import App from './src/components/App.jsx';
import Slides from './src/components/Slides.jsx';
import SingleSlide from './src/components/SingleSlide.jsx';
import { shallow } from '../enzyme';

describe('Components should exist', () => {
  it('Component App should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Component SingleSlide should exist', () => {
    const wrapper = shallow(<SingleSlide/>);
    expect(wrapper.exists()).toBe(true);
  });


  it('Component Slides should exist', () => {
    const wrapper = shallow(<Slides/>);
    expect(wrapper.exists()).toBe(true);
  });
});
