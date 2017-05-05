import Loader, { LoaderComponent }  from '../../app/containers/Loader';
import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);

test('Loader Containerloaded', () => {
  expect(Loader).toBeDefined();
});

test('LoaderComponent:test', () => {
  expect(LoaderComponent).toBeDefined();
  const loaderComponent = shallow(<LoaderComponent />);
  expect(loaderComponent).toBeDefined();
  expect(loaderComponent.find('.loader-wrapper').length).toEqual(1);
});


test('LoaderComponent:test', () => {
  const store = mockStore({})
  const loader = shallow(<Loader store={store}/>);
  expect(loader).toBeDefined();
});

