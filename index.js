import process from 'node:process';
import execa from 'execa';

export default async function getGruntTasks(cwd) {
	if (typeof cwd !== 'string') {
		cwd = process.cwd();
	}

	const {stdout} = await execa('grunt', ['--help', '--no-color'], {cwd});
	const matches = /Available tasks(.+) \n\n/s.exec(stdout);
	return matches ? matches[1].trim().split('\n').map(x => x.trim().split('  ')[0]) : [];
}
