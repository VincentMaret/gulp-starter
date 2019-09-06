'use strict';

const gulp = require('gulp');

const config = require('./config');
const buildStyles = require('./tasks/build-styles');
const buildScripts = require('./tasks/build-scripts');

gulp.task('buildStyles', buildStyles);
gulp.task('buildScripts', buildScripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series('buildStyles', 'buildScripts'));


function watch() {
  gulp.watch(config.paths.scripts.src, buildScripts);
  gulp.watch(config.paths.styles.src, buildStyles);
}


