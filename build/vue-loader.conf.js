'use strict'
const utils = require('./utils')
const config = require('../config')

module.exports = {
  transformAssetUrls: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
