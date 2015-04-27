'use strict';
var childProcess = require('child_process');

module.exports = function (pth, cb) {
	if (typeof pth !== 'string') {
		cb = pth;
		pth = process.cwd();
	}

	var gruntBinPath = require.resolve('grunt-cli/bin/grunt');

	childProcess.execFile(gruntBinPath, ['--help', '--no-color'], {cwd: pth}, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		var ret = /Available tasks([\s\S]+) \n\n/.exec(stdout);

		cb(null, ret ? ret[1].trim().split('\n').map(function (el) {
			return el.trim().split('  ')[0];
		}) : []);
	});
};
