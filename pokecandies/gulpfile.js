var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('serve', ['sass'], function(){
  browserSync.init({
    server: '.',
    port: 8080
  });

  gulp.watch("_css/*.sass", ['sass']);
  gulp.watch("js/**/*.js").on('change', browserSync.reload)
  gulp.watch("views/*.html").on('change', browserSync.reload)
  gulp.watch("*.html").on('change', browserSync.reload);
})

gulp.task('sass', function() {
    return gulp.src("_css/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css/"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);