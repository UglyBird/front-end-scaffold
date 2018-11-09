import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';
import nodemon from 'gulp-nodemon';


gulp.task('nodemon', () => {
    nodemon({
      script: './.bin/run.js',
      watch: ['./src', './config'],
      ext: 'js',
      ignore: ['./src/pages/']
    })
      .on('restart', () => {
        setTimeout(() => {
          browserSync.reload({
            stream: false
          });
        }, config.browserSync.reloadDelay + 1000);
      });
});


gulp.task('serve', ['nodemon'], () => {
    browserSync.init({
      proxy: `http://localhost:${config.port}`,
      files: ['./src/pages'],
      port: config.browserSync.port,
      reloadDelay: config.browserSync.reloadDelay,
      open: false,
      notify: config.browserSync.notify,
      //https: false,config.browserSync.https,
      scriptPath: config.browserSync.domain && function (path) {
        return `//${config.browserSync.domain}` + path;
      } ,
      socket: {
        domain: config.browserSync.domain
      }
    });
});