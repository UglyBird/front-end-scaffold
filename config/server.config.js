const env = process.env.NODE_ENV || 'dev';
const test = process.env.TEST_ENV || '';

module.exports = {
  ...{
    // dev
    dev: {
      MBDHost: process.env.MBD_HOST || 'http://10.202.6.150:8080'
      //http://10.202.6.150:8080
    },

    // production
    production: {
      MBDHost: process.env.MBD_HOST || ''
      //10.202.65.13:8080运维配置的生产的地址（已和郭杰确认）
    }
  }[test || env]
};
