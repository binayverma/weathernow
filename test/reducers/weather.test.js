import weatherReducer from '../../app/reducers/weather';

test('Weather Reducer: UPDATE_UNIT returns correct output', () => {
  const state = {};
  const action_unit = {
    type: 'UPDATE_UNIT',
    payload: 'x'
  };

  expect(weatherReducer(state, action_unit)).toEqual({
    unit: 'x'
  });
});

test('Weather Reducer: FETCH_WEATHER returns correct output', () => {
  const state = {};
  const action_weather = {
    type: 'FETCH_WEATHER',
    payload: {
      city: {
        name: 'cityName'
      },
      list: [{
        dt_txt: '2017-02-16 12:00:00'
      }]
    }
  };

  expect(weatherReducer(state, action_weather)).toEqual({
    error: '',
    data: {
      cityName: 'cityName',
      days: {
        '02-16-2017': [
          {
            dt_txt: '2017-02-16 12:00:00'
          }
        ]
      }
    },
    status: 'content'
  });
});

test('Weather Reducer: FETCH_WEATHER_ERROR returns correct output', () => {
  const state = {};

  const action_error_msg = {
    type: 'FETCH_WEATHER_ERROR',
    payload: {
      message: 'Error message is here'
    }
  };
  const action_error = {
    type: 'FETCH_WEATHER_ERROR'
  };

  expect(weatherReducer({}, action_error_msg)).toEqual({
    error: 'Error message is here',
    status: 'error'
  });

  expect(weatherReducer({}, action_error)).toEqual({
    error: 'Error in API or City not found',
    status: 'error'
  });
});
