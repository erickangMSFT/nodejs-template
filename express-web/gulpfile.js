'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');

const jsFiles = ['*.js', './src/**/*.js'];

gulp.task('default', ()=> {
    nodemon({
        script: './bin/www',
        ext: 'js',
        env: {
            PORT: 8000,
        },
        ignore: ['./node_modules/**'],
    })
    .on('restart', function() {
        console.log('Restarting...');
    });
});

gulp.task('inject', ()=> {
    const wiredep = require('wiredep').stream;
    const inject = require('gulp-inject');
    const options = {
        bowerJason: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    const injectSrc = gulp.src(['./public/css/*.css','./public/js/*.js'],{read:false});
    const injectOptions = {
        ignorePath: '/public'
    };
    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});