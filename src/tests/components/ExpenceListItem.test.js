import React from 'react';
import { shallow } from 'enzyme';
import { ExpenceListItem } from "../../components/expence-list-item";
import expences from '../fixtures/expences';

test('should render ExpenceListItem correctly with data', () => {
    const wrapper = shallow(<ExpenceListItem {...expences[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

