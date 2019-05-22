'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  console.log(file);
  if(!file || file.match(/bad/i) ) {
    cb(`Invalid File or ${file} is bad`);
  }
  else {
    cb(undefined, new Buffer('File Contents'));
  }
};