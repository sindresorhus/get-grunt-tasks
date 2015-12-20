'use strict';
var childProcess = require('child_process');
var pify = require('pify');
var Promise = require('pinkie-promise');

module.exports = function (pth) {
	if (typeof pth !== 'string') {
		pth = process.cwd();
	}

	var gruntBinPath = require.resolve('grunt-cli/bin/grunt');
	var args = [gruntBinPath, '--help', '--no-color'];

	return pify(childProcess.execFile, Promise)(process.execPath, args, {cwd: pth})
		.then(function (stdout) {
			var ret = /Available tasks([\s\S]+) \n\n/.exec(stdout);

			return ret ? ret[1].trim().split('\n').map(function (el) {
				return el.trim().split('  ')[0];
			}) : [];
		});
};
