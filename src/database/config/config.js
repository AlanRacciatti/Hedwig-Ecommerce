require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.PRODUCTION_USERNAME,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": process.env.PRODUCTION_DIALECT
  },
  // "development": {
  //   "username": "hedwig",
  //   "password": "alwaysdata2605",
  //   "database": "hedwig_testeo",
  //   "host": "mysql-hedwig.alwaysdata.net",
  //   "dialect": "mysql"
  //  },
  "production": {
    "username": process.env.PRODUCTION_USERNAME,
    "password": process.env.PRODUCTION_PASSWORD,
    "database": process.env.PRODUCTION_DATABASE,
    "host": process.env.PRODUCTION_HOST,
    "dialect": process.env.PRODUCTION_DIALECT
  }
}
