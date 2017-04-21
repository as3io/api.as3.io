var
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  spawn = require('child_process').spawn,
  del = require('del'),
  node,
  watchedPaths = [
    'src/**/*.js'
  ]
;

gulp.task('serve', ['lint', 'build'], function(cb) {
  if (node) {
    node.kill();
  }

  node = spawn('node', ['dist/app.js'], {stdio: 'inherit'});

  node.on('close', function (code) {
    if (code === 8) {
      cb(code);
      console.log('Error detected, waiting for changes...');
    }
  });
    cb();
})

gulp.task('watch', function() {
  gulp.watch(watchedPaths, ['build', 'serve']);
})

gulp.task('lint', function(cb) {
  lint = spawn('./node_modules/.bin/eslint', watchedPaths, {stdio: 'inherit'});
  lint.on('close', function (code) {
    if (code === 8) {
      cb(code);
      gulp.log('Error detected, waiting for changes...');
    }
    cb();
  });
})

gulp.task('clean', function(cb) {
  del(['dist/**', '!dist', '!dist/.gitignore']).then(function(paths) {
    cb();
  });
})

gulp.task('build', ['clean'], function(cb) {
  gulp
    .src(watchedPaths)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
    .on('end', cb)
  ;
})

gulp.task('default', ['watch', 'serve']);

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})
