
const fs = require('fs');
const path = require('path');
/**
 * Load the game.
 * @param {object} config The configuration to load.
 * @return {Promise} A promise to return the game.
 */
function load(config) {
  if (!config) {
    throw new Error('You must provide a config object to load the game');
  }

  return new Promise((resolve, reject) => {
  });
}

module.exports = load;
