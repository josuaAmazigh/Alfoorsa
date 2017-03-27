const gulp             = require('gulp');
const clean            = require('gulp-clean');
const eventStream      = require('event-stream');
const browserSync      = require('browser-sync');
const bowerFiles       = require('main-bower-files');
const config           = require('../package').gulp;

const localTranslations= () => {
  return gulp.src(`${config.src.translations}${config.selectors.translations}`);
};

const vendorTranslations= () => {
  return gulp.src(bowerFiles(config.selectors.translations));
};

const cleanTranslations= () => {
  return gulp.src(config.dest.translations, { read: false })
    .pipe(clean());
};

const copyTranslations= () => {
  return eventStream.merge(
    localTranslations(),
    vendorTranslations()
  )
  .pipe(gulp.dest(config.dest.translations));
};

const buildTranslations= () => {
  return eventStream.merge(
    cleanTranslations(),
    copyTranslations()
  )
  .pipe(browserSync.stream());
};

gulp.task('build-translations', buildTranslations);
module.exports = buildTranslations;
