var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', ()=>{
    nodemon({
        script: './bin/www',
        ext: 'js',
        env: {
            PORT:8000
        },
        ignore: ['./node_modules/**']
    })
    .on('restart',()=>{
        console.log('Restarting...');
    });
});