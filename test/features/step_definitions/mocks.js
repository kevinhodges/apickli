const {defineSupportCode} = require('cucumber');
let fs = require('fs')

defineSupportCode(function({Given}) {
	Given('I use the readFileSync mock', function (callback) {
		
		// stub the filesystem here...
		// the value returned needs to pass a JSON.parse check (as the code suggests)
		this.sandbox.stub(fs, 'readFileSync').returns('{"kevin":"hodges","foo":true}')

		callback();
	});
})