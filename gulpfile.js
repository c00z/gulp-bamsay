var gulp = require('gulp');
var beautify = require('gulp-beautify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require("gulp-sass");
var watch = require("gulp-watch");
var connect = require("gulp-connect");

gulp.task('default', function() {
  console.log('I am the default task!');
});

gulp.task('dog', function() {
  console.log('I AM A DAWWWGGGGGG!');
});

gulp.task('date', function() {
   today = new Date();
   day = today.getDate();
   month = today.getMonth()+1;
   year = today.getFullYear();
  console.log("Yay, today is " + month + '/' + day + '/' + year);
});

gulp.task('jshint', function() {
  return gulp.src('./js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('sass', function () {
return gulp.src('./css/**/*.scss')
 .pipe(sass().on('error', sass.logError))
 .pipe(gulp.dest('./css/'))
});

gulp.task('watch', function () {
gulp.watch('./css/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});
