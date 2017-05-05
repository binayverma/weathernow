import { getWeather } from '../../app/actions/index';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/actions/index';
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);
import request from '../../app/services/request';
import fetchMock from 'fetch-mock';


test('get weather data', () => {
  const text = 'hyderabad';
  const response = {
      cod: '200',
      city: {
        name: 'hyd'
      }
    };
    const expectedActions = [
      { type: 'Loading' },
      { type: 'FETCH_WEATHER', payload: response },
      { type: 'Loaded' }
    ];

    fetchMock.get('*', response);
    const store = mockStore({})

    return store.dispatch(actions.getWeather(text))
    .then(res => {
      expect(store.getActions()).toEqual(expectedActions);
    })
});

test('error scenario : get weather data', () => {
  fetchMock.restore();
  const text = 'hyderabad';
  const response = {
      cod: '400',
      city: {
        name: 'hyd'
      }
    };
    const expectedActions = [
      { type: 'Loading' },
      { type: 'FETCH_WEATHER_ERROR', payload: 'Error: Error in fetching data.' },
      { type: 'Error' }
    ];

    fetchMock.get('*', response);
    const store = mockStore({})

    return store.dispatch(actions.getWeather(text))
    .then(res => {
      expect(store.getActions()).toEqual(expectedActions);
    })
});

test('updateUnit changes unit of temperature', () => {
  const response = [
        { type: 'UPDATE_UNIT', payload: 'c'}
      ];

      const store = mockStore({});
      store.dispatch(actions.updateUnit('c'));
      expect(store.getActions()).toEqual(response);
});
