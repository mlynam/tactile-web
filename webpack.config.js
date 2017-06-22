
const path = require('path');
const pkg = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: `${pkg.name}.[hash:8].js`,
  },
};
