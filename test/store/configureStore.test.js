const configureStore = require('../../app/store/configureStore');

test('Configure Store loaded', () => {
  expect(configureStore).toBeDefined();
});
