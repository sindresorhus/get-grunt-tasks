import process from 'node:process';
import execa from 'execa';

export default async function getGruntTasks(cwd = process.cwd()) {
	const {stdout} = await execa('grunt', ['--help', '--no-color'], {cwd, localDir: cwd, preferLocal: true});
	const matches = /Available tasks(.+) \n\n/s.exec(stdout);
	return matches ? matches[1].trim().split('\n').map(line => line.trim().split('  ')[0]) : [];
}
