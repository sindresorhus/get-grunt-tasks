'use strict';
const execa = require('execa');

module.exports = cwd => {
	if (typeof cwd !== 'string') {
		cwd = process.cwd();
	}

	return execa('grunt', ['--help', '--no-color'], {cwd}).then(result => {
		const ret = /Available tasks([\s\S]+) \n\n/.exec(result.stdout);
		return ret ? ret[1].trim().split('\n').map(x => x.trim().split('  ')[0]) : [];
	});
};
