var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  jsLibs = [
    "bower_components/angular/angular.min.js",
    "bower_components/angular-animate/angular-animate.min.js",
    "bower_components/angular-messages/angular-messages.min.js",
    "bower_components/angular-aria/angular-aria.min.js",
    "bower_components/angular-route/angular-route.min.js",
    "bower_components/angular-material/angular-material.min.js",
    "bower_components/angularfire/dist/angularfire.min.js",
    "bower_components/angular-local-storage/dist/angular-local-storage.min.js",
    "bower_components/jquery/dist/jquery.min.js"
  ]

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

gulp.task('libs', function(){
  gulp.src(jsLibs)
    .pipe(gulp.dest('lib/'))
})

gulp.task('default', ['serve']);