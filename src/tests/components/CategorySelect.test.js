import React from 'react';
import { shallow } from 'enzyme';
import { CategorySelect } from '../../components/CategorySelect';


test('Should render Category Select correctly', () => {
  const wrapper = shallow(<CategorySelect onChange={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});