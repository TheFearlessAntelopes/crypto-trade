const gulp = require('gulp');
const clean = require('gulp-clean');
const shell = require('gulp-shell');
const sync = require('gulp-sync')(gulp);
const nodemon = require('gulp-nodemon');
const notify = require('gulp-notify');
const livereload = require('gulp-livereload');

gulp.task('clean', function () {
	return gulp
		.src('dist', {
			read: false,
		})
		.pipe(clean());
});
gulp.task('build', shell.task(['ng build --watch']));
gulp.task('server', shell.task(['nodemon server/app.js']));

gulp.task('run', ['clean', 'build', 'server']);