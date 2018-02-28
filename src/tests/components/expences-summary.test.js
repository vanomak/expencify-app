import React from 'react';
import { shallow } from 'enzyme';
import {ExpenceSummary} from "../../components/expences-summary";
import expences from '../fixtures/expences';

test('should render ExpenceSummary correctly', () => {
    const wrapper = shallow(<ExpenceSummary expences={expences} total={10870} />);
    expect(wrapper).toMatchSnapshot();
});
