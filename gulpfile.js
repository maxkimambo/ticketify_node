'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

    var wiredep = require('wiredep').stream;


var jsFiles = ['*.js', 'app/**/*.js', 'config/**/*.js'];
var htmlFiles = ['app/views/**/*.handlebars'];

/**
 * Style checking task
 */
gulp.task('stylecheck', function(){

  return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
          verbose: true
        }))
        .pipe(jscs());
});

/**
 * JS injection task
 */
gulp.task('inject', function(){

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/components'
    };

    return gulp.src(htmlFiles)
        .pipe(wiredep(options))
        .pipe(gulp.dest('app/views/'))
});

/**
 *  Starts development task
 */
gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'server.js',
    ext: 'js handlebars',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop'
]);
