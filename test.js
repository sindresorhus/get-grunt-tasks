import test from 'ava';
import getGruntTasks from './index.js';

test('main', async t => {
	t.deepEqual(await getGruntTasks('fixture'), ['default', 'test']);
});
