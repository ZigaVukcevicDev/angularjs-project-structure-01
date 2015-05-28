var gulp = require('gulp');
var notify = require('gulp-notify');
var webserver = require('gulp-webserver');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');

gulp.task('serve', function(){
	gulp.src('.')
	.pipe(webserver({
		port: 48080,
		livereload: true,
		open: 'http://localhost:48080/dist/'
	}));
});

gulp.task('usemin', function () {
  return gulp.src('./src/index.html')
      .pipe(usemin({
        css: ['concat']
      }))
      .pipe(gulp.dest('dist'));

  return gulp.src('./src/index.html')
      .pipe(usemin({
        js: [uglify()]
      }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['serve'], function(){
	gulp.start(['usemin']);
	gulp.watch(['./src/**/*.html'], ['usemin']);
});