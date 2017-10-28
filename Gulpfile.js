var gulp = require('gulp'),
    clean = require('gulp-clean'),
    nodemon = require('gulp-nodemon'),
    sourceFiles = ['./node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js',
        './node_modules/angular-cookies/angular-cookies.min.js',
        './node_modules/angular-resource/angular-resource.min.js',
        './node_modules/angular-sanitize/angular-sanitize.min.js',
        './node_modules/bootstrap/dist/**/*.min.*',
        './node_modules/bootstrap/dist/fonts/**/*',
        './node_modules/oclazyload/dist/ocLazyLoad.min.js',
        './node_modules/animate.css/animate.min.css',
        './node_modules/font-awesome/css/font-awesome.min.css',
        './node_modules/font-awesome/fonts/**/*',
        './node_modules/socket.io-client/dist/socket.io.slim.js'
    ],
    destination = './public/assets/';

gulp.task('clean', function() {
    return gulp.src(destination, { read: false })
        .pipe(clean({ force: true }));
});
gulp.task('copy', ['clean'], function() {
    return gulp.src(sourceFiles, { base: './node_modules' })
        .pipe(gulp.dest(destination));
});
gulp.task('default', ['copy'], function() {
    var stream = nodemon({
        script: 'server.js'
    });
    stream
        .on('restart', function() {
            console.log('restarted!')
        })
        .on('crash', function() {
            console.error('Application has crashed!\n')
            stream.emit('restart', 10) // restart the server in 10 seconds 
        })
});

gulp.task('dev', ['copy'], function() {
    nodemon({
        script: 'server.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    })
});