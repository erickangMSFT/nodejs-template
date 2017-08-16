
setup a new node express web application

```bash
npm install express express-generator --save
node_modules/.bin/express . -f
npm install

npm install gulp --save
npm install gulp-nodemon --save
```

```javascript
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
```

```bash
npm install bower -g
bower init

mkdir ./public/lib
touch .bowerrc
echo {\"directory\":\"public/lib\"} > .bowerrc

bower install --save bootstrap
bower install --save font-awesome
```

```bash
npm install eslint -g
eslint --init or copy eslintrc.js from the template lib
```

```bash
npm install wiredep --save-dev
npm install gulp-inject --save-dev
```

```javascript
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
```

```html
<html>
<head>
    <!-- bower:css -->
    <!-- endbower -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- inject:css -->
    <!-- endinject -->
    <!-- inject:js -->
    <!-- injectjs -->
</head>
<body>
</body>
</html>
```

```javascript
// wiredep fix in bower.json
"dependencies": {
    "bootstrap": "^3.3.7",
    "font-awesome": "^4.7.0"
  },
  "overrides":{
    "bootstrap":{
      "main":[
        "dist/js/bootstrap.js",
        "dist/css/bootstrap.min.css",
        "less/bootstrap.less"
      ]
    },
    "font-awesome":{
      "main":[
        "less/font-awesome.less",
        "css/font-awesome.min.css",
        "scss/font-awesome.scss"
      ]
    }
  }
```

For local stuff

```bash
npm install --save-dev gulp-inject
```

Including chart.js
see [chartjs.org](https://www.chart.org)
```bash
bower install chart.js --save
```