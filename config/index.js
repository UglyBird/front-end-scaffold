const env = process.env.NODE_ENV || 'dev';
const test = process.env.TEST_ENV || '';

// use webpack env to sep server and client config
// so server config cannot be seen in client
// do not modify anything here
const targetConfig = require(process.env.TARGET == 'client' ? 
  './client.config.js' : './server.config.js');

module.exports = {
  timestamp: +new Date, 
  env,
  test,
  port: process.env.PORT || 3010,
  baseUrl: process.env.BASE_URL || '',
  cdnUrl: process.env.CDN_URL || '',
  assets: /\.(png|jpe?g|gif|svg|pdf|ico)(\?.*)?$/i,
  mirage: {
    enable: false,
    limit: 3
  },
  ...{
    // dev
    dev: {
      browserSync: {
        port: 3000,
        reloadDelay: 300,
        notify: false
      },
      logger: {
        level: 'debug',
        maxsize: 100 * 1024 * 1024
      },
    },

    // production
    production: {
      logger: {
        level: 'warn',
        maxsize: 100 * 1024 * 1024
      },
    }
  }[test || env],
  ...targetConfig,
};
