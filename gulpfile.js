var
  gulp = require('gulp'),
  babel = require('gulp-babel'),
  spawn = require('child_process').spawn,
  node,
  watchedPaths = [
    'src/**/*.js'
  ]
;

gulp.task('serve', function() {
  if (node) {
    node.kill();
  }

  node = spawn('node', ['dist/app.js']);

  node.stdout.pipe(process.stdout);
  node.stderr.pipe(process.stderr);

  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

gulp.task('watch', function() {
  gulp.watch(watchedPaths, ['lint', 'build', 'serve']);
})

gulp.task('lint', function() {
  lint = spawn('./node_modules/.bin/eslint', watchedPaths);
  lint.stdout.pipe(process.stdout);
  lint.stderr.pipe(process.stderr);
  lint.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
})

gulp.task('build', function() {
  console.log('Building JS');
  gulp
    .src(watchedPaths)
    .pipe(babel())
    .pipe(gulp.dest('dist'))
  ;
})

gulp.task('default', ['lint', 'build', 'watch', 'serve']);

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})


// gulp.task('default', ['watch', 'serve'], function() {

// });

// gulp.task('build', function() {
//   // place code for your default task here
//   gulp
//     .src('src/**/*.js')
//     .pipe(babel({
//       presets: ['es2015']
//     }))
//     .pipe(gulp.dest('dist'))
//   ;
// });

// gulp.task('serve', function() {
//   console.warn('Serving!');
// })

// gulp.task('watch', function() {
//   gulp.watch('src/**/*', ['build']);
// })

