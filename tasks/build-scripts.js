'use strict';

const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cache = require('gulp-memory-cache');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const config = require('../config');

const buildScripts = () => {
  return gulp.src(config.paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(cache('js'))
    .pipe(concat(config.paths.scripts.name))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest(config.paths.output));
}

module.exports = buildScripts;