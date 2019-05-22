'use strict';

module.exports = exports = {};

exports.readFile = (file, cb) => {
  console.log(file);
  if(!file || file.match(/bad/i) ) {
    cb(`Invalid File or ${file} is bad`);
  }
  else {
    setTimeout(() => {
      cb(undefined, new Buffer(`${File} Contents`));
    }, Math.floor(Math.random() * 50));
  }
};