# get-grunt-tasks

> Get the Grunt tasks from a Grunt project

## Install

```sh
npm install get-grunt-tasks
```

## Usage

Imagine a `gruntfile.js` in `./grunt-project`:

```js
module.exports = grunt => {
	grunt.registerTask('default');
	grunt.registerTask('test');
};
```

You can get its tasks with:

```js
import getGruntTasks from 'get-grunt-tasks';

console.log(await getGruntTasks('grunt-project'));
//=> ['default', 'test']
```

## API

### getGruntTasks(cwd?)

Returns a `Promise<string[]>` with the tasks.

#### cwd

Type: `string`\
Default: `process.cwd()`

The path to the directory of your Grunt project.
