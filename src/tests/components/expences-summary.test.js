import React from 'react';
import { shallow } from 'enzyme';
import {ExpenceSummary} from "../../components/expences-summary";
import expences from '../fixtures/expences';

test('should render ExpenceSummary correctly single', () => {
    const wrapper = shallow(<ExpenceSummary expenceCount={1} total={10870} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenceSummary correctly multiple', () => {
    const wrapper = shallow(<ExpenceSummary expenceCount={2} total={20870} />);
    expect(wrapper).toMatchSnapshot();
});
