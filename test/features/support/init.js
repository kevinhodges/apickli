const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

// // set cucumber timeout (since The Works takes longer than the default to boot)
// defineSupportCode(function ({ setDefaultTimeout }) {
//   setDefaultTimeout(30 * 1000)
// })

var server = require('../../../server')

var ourApickli

defineSupportCode(function({BeforeAll}) {
  BeforeAll(function(callback) {
    var self = this
    server.start(function () {
      ourApickli = new apickli.Apickli('http', 'localhost:3000')
      callback()
    })
  });
});

defineSupportCode(function({Before}) {
  Before(function(scenario, callback) {
    var self = this
    self.apickli = ourApickli
    callback()
  });
});
