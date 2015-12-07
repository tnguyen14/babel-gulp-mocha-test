
var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');
require('babel-core/register');
require('babel-polyfill');

gulp.task('test', function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(babel())
		.pipe(mocha({
			ui: 'tdd'
		}));
});
