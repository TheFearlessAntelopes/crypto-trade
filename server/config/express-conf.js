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

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  return app;
};
