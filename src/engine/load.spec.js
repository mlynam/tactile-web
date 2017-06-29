
const load = require('./load');
jest.mock('fs');

test('it should throw if no config is provided', () => {
  // Assert
  expect(() => load()).toThrow();
});

test('it should reject if it cannot find the data1.bin file', () => {
  // Act && Assert
  return expect(load({dataDir: 'c:\\'})).rejects.toBeDefined();
});

test('it should resolve with a valid data1.bin file', () => {
  return expect(load({dataDir: __dirname})).resolves.toBeDefined();
});
