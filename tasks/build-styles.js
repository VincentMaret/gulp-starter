'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-memory-cache');
const cleanCSS = require('gulp-clean-css');

const config = require('../config');

const buildStyles = () => {
  return gulp.src(config.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(cache('less'))
    .pipe(less())
    .pipe(concat(config.paths.styles.name))
    //.pipe(cleanCSS())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.paths.output));
}


module.exports = buildStyles;