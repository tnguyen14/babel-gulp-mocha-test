
var gulp = require('gulp');
var babel = require('gulp-babel');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
	return gulp.src('test/*.js', {read: false})
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(mocha({
			ui: 'tdd'
		}));
});
