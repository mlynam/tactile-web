
const load = require('./load');
jest.mock('fs');

test('it should throw if no config is provided', () => {
  // Assert
  expect(() => load()).toThrow();
});
