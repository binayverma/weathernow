import Weather from '../../app/components/Weather';
import { shallow } from 'enzyme';
import React from 'react';

test('Weather loaded', () => {
  expect(Weather).toBeDefined();
});

test('Weather Compenent:test', () => {
  const WeatherShallow = shallow(<Weather />);
  expect(WeatherShallow).toBeDefined();
});
