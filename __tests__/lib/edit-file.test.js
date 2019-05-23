'use strict';

//CLASS EXAMPLE FOR HELPING THE BRAINS


//changes functions to promises
// const fsAccesPromisified = util.promisify(fs.access);

// const fs = require('fs');
// const copyFile = require('../../edit-file');

// let fileToRead = `${__dirname}/../files/2.txt`;
// let fileToWrite = `${__dirname}/../files/output/two.txt`;


// describe('Copy File Module', () => {
//   it('call callback with error for missing readFile', done => {
//     let result = copyFile('missingFile', fileToWrite, (err, data));
//     expect(err).toBeDefined();
//     done();
//   });

//   it('calls callback with data from readFile', done => {
//     copyFile(fileToRead, fileToWrite, (err, data) => {
//       expect(data).toBeDefined();
//       expect(data.toString().trim()).toBe('File 2 Contents');
//       expect(data.toString()).toBe(`File 2 Contents'${EOL}`);
//       done();
//     });
//   });

//   it('creates fileToWrite', done => {
    
//     copyFile(fileToRead, fileToWrite, (err, data) => {
//       expect(err).toBeFalsy();
//       expect(data).toBeDefined();

//       fs.acces(fileToWrite, fs.constants.F_OK, (err) => {
//         if(err) throw err;

//         done();
//       });

//     });
//   });
// });