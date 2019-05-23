'use strict';

const fs = require('fs');



module.exports = function (fileToRead, fileToWrite, callback) {
  fs.readFile(fileToRead, (err, data) => {
    if(err){
      callback(err);
    }
    return callback(null, data);
  });
};



//CLASS EXAMPLE FOR HELPING THE BRAINS

// module.exports = function (fileToRead, fileToWrite, callback) {
  
//   fs.readFile(fileToRead, (err, data) => {
//     if(err){
//       callback(err);
//     }
//     else{
//       fs.writeFile(fileToWrite, data, (err) => {
//         if(err) {
//           return callback(err);
//         }
//         callback(null, data);
//       });
//     }
//   });
// };


