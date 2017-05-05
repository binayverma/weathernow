import Welcome from '../../app/components/Welcome';
import { shallow } from 'enzyme';
import React from 'react';

test('Welcome loaded', () => {
  expect(Welcome).toBeDefined();
});

test('Welcome Compenent:test', () => {
  const WelcomeShallow = shallow(<Welcome />);
  expect(WelcomeShallow).toBeDefined();
});
