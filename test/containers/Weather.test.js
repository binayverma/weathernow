import Weather, { WeatherContainer }  from '../../app/containers/Weather';
import { shallow } from 'enzyme';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);

test('Weather Conatiner loaded', () => {
  expect(WeatherContainer).toBeDefined();
});

test('WeatherContainer:test error', () => {
  expect(WeatherContainer).toBeDefined();
  const weather = {
    data: {
      cod: '200',
      city: {
        name: 'hyd'
      }
    },
    error:'error',
    status: 'error',
    unit: 'c'
  };
  const weatherContainer = shallow(<WeatherContainer weather={weather}/>);
  expect(weatherContainer).toBeDefined();
  expect(weatherContainer.find('.weather-container').length).toEqual(1);
});

test('WeatherContainer:test welcome', () => {
  expect(WeatherContainer).toBeDefined();
  const weather = {
    data: {
      cod: '200',
      city: {
        name: 'hyd'
      }
    },
    error:'',
    status: 'welcome',
    unit: 'c'
  };
  const weatherContainer = shallow(<WeatherContainer weather={weather}/>);
  expect(weatherContainer).toBeDefined();
  expect(weatherContainer.find('.weather-container').length).toEqual(1);
});


test('WeatherContainer:test 2', () => {
  const store = mockStore({})
  const weather = shallow(<Weather store={store}/>);
  expect(weather).toBeDefined();
});
