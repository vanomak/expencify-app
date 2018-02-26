import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/header';

test('should render header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});

