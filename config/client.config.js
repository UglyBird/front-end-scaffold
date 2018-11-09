const env = process.env.NODE_ENV || 'dev';
const test = process.env.TEST_ENV || '';

module.exports = {
  ...{
    // dev
    dev: {
      
    }, 

    // production
    production: {
     
    }
  }[test || env]
};
