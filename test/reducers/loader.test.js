import loaderReducer from '../../app/reducers/loader';

test('Loader Reducer: returns correct output', () => {
  const state = {};
  const action1= {
    type: 'Loading'
  };
  const action2= {
    type: 'Loaded'
  };
  const action3= {
    type: 'Error'
  };

  expect(loaderReducer(state, action1)).toEqual('loading');
  expect(loaderReducer(state, action2)).toEqual('loaded');
  expect(loaderReducer(state, action3)).toEqual('error');
});
