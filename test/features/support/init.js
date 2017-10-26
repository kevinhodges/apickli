const apickli = require('apickli');
const {defineSupportCode} = require('cucumber');
const sinon = require('sinon')

var server = require('../../../server')

var ourApickli
var ourSandbox

defineSupportCode(function({BeforeAll}) {
  BeforeAll(function(callback) {
    
    // create a sandbox for every test
    ourSandbox = sinon.createSandbox() 

    // and a server to actually test
    server.start(function () {
      ourApickli = new apickli.Apickli('http', 'localhost:3000')
      callback()
    })
  });
});

defineSupportCode(function({After}) {
  After(function(scenario, callback) {
    // cleardown the sandbox
    this.sandbox.restore()
    callback()
  });
});

defineSupportCode(function({Before}) {
  Before(function(scenario, callback) {
    var self = this
    self.apickli = ourApickli
    self.sandbox = ourSandbox
    callback()
  });
});
