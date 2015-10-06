# get-grunt-tasks [![Build Status](https://travis-ci.org/sindresorhus/get-grunt-tasks.svg?branch=master)](https://travis-ci.org/sindresorhus/get-grunt-tasks)

> Get the grunt tasks from a grunt project


## Install

```
$ npm install --save get-grunt-tasks
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
const getGruntTasks = require('get-grunt-tasks');

getGruntTasks('grunt-project', (err, tasks) => {
	console.log(tasks);
	//=> ['default', 'test']
});
```


## API

### getGruntTasks([path], callback)

#### path

Type: `string`  
Default: `process.cwd()`

Path to the directory of your grunt project.

#### callback(err, tasks)

*Required*  
Type: `function`


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
