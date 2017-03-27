const gulp             = require('gulp');
const gulpIf           = require('gulp-if');
const htmlhint         = require('gulp-htmlhint');
const htmlmin          = require('gulp-htmlmin');
const inject           = require('gulp-inject');
const browserSync      = require('browser-sync');
const config           = require('../package').gulp;

const validateActivation = () => {
  return gulp.src(`${config.srcDir}${config.main.activation}`)
  .pipe(htmlhint({'doctype-first': false}))
  .pipe(htmlhint.reporter('htmlhint-stylish'));
};

const buildActivation = () => {
  const css = require('./css')();

  return validateActivation()
    // write first to get relative path for inject
    .pipe(gulp.dest(config.destDir))
    .pipe(inject(css, {relative: true, addRootSlash: true }))
    .pipe(gulpIf(global.production, htmlmin({collapseWhitespace: true, removeComments: true})))
    .pipe(gulp.dest(config.destDir))
    .pipe(gulpIf(!global.production, browserSync.stream()));
};

gulp.task('build-activation', buildActivation);
module.exports = buildActivation;
