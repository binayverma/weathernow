import NavBar from '../../app/components/NavBar';
import { shallow } from 'enzyme';
import React from 'react';

test('NavBar compenent:test', () => {
  const NavShallow = shallow(<NavBar />);
  expect(NavShallow).toBeDefined();
});
