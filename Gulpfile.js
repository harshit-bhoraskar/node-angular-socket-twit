var gulp = require('gulp'),
    clean = require('gulp-clean'),
    sourceFiles = ['./node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/angular-cookies/angular-cookies.min.js',
        './node_modules/angular-resource/angular-resource.min.js',
        './node_modules/angular-sanitize/angular-sanitize.min.js',
        './node_modules/bootstrap/dist/**/*.min.*',
        './node_modules/bootstrap/dist/fonts/**/*'
    ],
    destination = './public/assets/';

gulp.task('clean', function() {
    return gulp.src(destination, { read: false })
        .pipe(clean({ force: true }));
});
gulp.task('default', ['clean'], function() {
    return gulp.src(sourceFiles, { base: './node_modules' })
        .pipe(gulp.dest(destination));
});