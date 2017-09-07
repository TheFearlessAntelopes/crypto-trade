/* use strict */
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const minify = require('express-minify');

module.exports = () => {
  const app = express();
  app.use(express.static(path.join(__dirname, '../../dist/')));

  app.use(minify({
    css_match: /css/,
    json_match: /json/,
    uglifyJS: undefined,
    cssmin: undefined,
    cache: false,
    onerror: undefined,
  }));

  // const originsWhitelist = [
  //   'http://localhost:4200',
  //   //'http://crypto-store-project@herokuapp.com' on production
  // ];

  // const corsOptions = {
  //   origin: function (origin, callback) {
  //     var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
  //     callback(null, isWhitelisted);
  //   },
  //   credentials: true
  // }

  // app.use(cors(corsOptions));

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', ['Content-Type']);
    return next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  return app;
};
