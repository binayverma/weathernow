import Footer from '../../app/components/Footer';
import { shallow } from 'enzyme';
import React from 'react';

test('footer loaded', () => {
  expect(Footer).toBeDefined();
});


test('Footer compenent:test', () => {
  const footer = shallow(<Footer />);
  expect(footer).toBeDefined();
});
