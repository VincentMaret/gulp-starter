let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let cache = require('gulp-memory-cache');
let cleanCSS = require('gulp-clean-css');


let paths = {
  styles: {
    src: './src/less/**/*.less',
    dest: 'dist/assets/css/',
    name: 'style.css'
  },
  scripts: {
    src: './src/js/**/*.js',
    dest: 'dist/assets/js/',
    name: 'main.js'
  }
};

function styles() {
  console.log('start less task');
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(cache('less'))
    .pipe(less())
    .pipe(concat(paths.styles.name))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  console.log('start js task');
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(cache('js'))
    .pipe(concat(paths.scripts.name))
    .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

gulp.task('less', styles);
gulp.task('script', scripts);
gulp.task('watch', watch);
