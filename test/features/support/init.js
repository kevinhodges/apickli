const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

// // set cucumber timeout (since The Works takes longer than the default to boot)
// defineSupportCode(function ({ setDefaultTimeout }) {
//   setDefaultTimeout(30 * 1000)
// })

var server = require('../../../server')

defineSupportCode(function({BeforeAll}) {
  BeforeAll(function(callback) {
    var self = this
    server.start(function () {
      self.apickli = new apickli.Apickli('http', 'localhost:3000')
      callback()
    })
  });
});

// defineSupportCode(function({Before}) {
//   Before(function(scenario, callback) {
//     console.log('scenario', scenario)
//     console.log('callback', callback)
//     var self = this
//     server.start(function () {
//       self.apickli = new apickli.Apickli('http', 'localhost:3000')
//       callback()
//     })
//   });
// });
