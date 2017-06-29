
/**
 * Mocked readFile method.
 * @param {string} filename The filename we are to load.
 * @param {function} callback The loading callback.
 */
function readFile(filename, callback) {
  if (filename.includes('engine')) {
    callback(null, Buffer.from(JSON.stringify({hello: 'world!'})));
  } else {
    callback(new Error('Failed to open the file'));
  }
}

const fs = {readFile};

module.exports = fs;
