#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

const p = spawn(
	'node',
	[
		require.resolve('@babel/cli/bin/babel.js'),
		process.cwd(),
		'--out-dir',
		'dist',
		'--config-file',
		path.resolve(__dirname, '.babelrc'),
		'--include',
		'node_modules/@mhy',
		'--ignore',
		'node_modules,test',
		'--delete-dir-on-start',
		...process.argv.slice(2)
	], {
		shell: true
	}
)

p.stdout.on('data', function(data) {
	console.log(data.toString());
})

p.stderr.on('data', function(data) {
	console.error(data.toString());
})
