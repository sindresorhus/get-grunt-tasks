# get-grunt-tasks

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

getGruntTasks('grunt-project').then(tasks => {
	console.log(tasks);
	//=> ['default', 'test']
});
```


## API

### getGruntTasks([path])

Returns a promise.

#### path

Type: `string`<br>
Default: `process.cwd()`

Path to the directory of your grunt project.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
