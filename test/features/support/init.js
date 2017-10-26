const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');

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
