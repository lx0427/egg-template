'use strict'

/** @type Egg.EggPlugin */
exports.static = {
  // enable: true,
}

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
}

const path = require('path')
exports.ua = {
  enable: true,
  path: path.join(__dirname, '../egg-ua'),
}

exports.validate = {
  enable: true,
  package: 'egg-validate',
}
