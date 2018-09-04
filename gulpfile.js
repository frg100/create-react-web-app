const gulp         = require('gulp');
const browserify   = require('browserify');
const source       = require('vinyl-source-stream');
const reactify     = require('reactify');
const nodemon      = require('gulp-nodemon');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require("gulp-rename");

gulp.task('browserify', () => {
  const b = browserify({
    entries: ['src/main.js'], //entry file
    debug: true
  });
  b.transform(reactify); // use the reactify transform
  
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(rename("bundle.js"))
    .pipe(gulp.dest('./public'));
});

gulp.task('watch:js', () => {
  gulp.watch('src/components/**/*', ['browserify']);
  gulp.watch('src/util/**/*', ['browserify']);
});

gulp.task('watch:css', () => gulp.watch(['src/css/**/*'], ['bundle-css']));

gulp.task('bundle-css', () => {
  return gulp.src('src/css/main.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public'));
});

gulp.task('dev:serve', ['browserify'], () => nodemon({
  nodeArgs: ['--inspect'],
  args: [],
  script: 'server.js',
  ext: 'js'
}));

gulp.task('server', [
  'bundle-css',
  'dev:serve',
  'watch:js', 
  'watch:css',
  'browserify'
]);

