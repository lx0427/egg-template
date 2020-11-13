/* eslint valid-jsdoc: "off" */

'use strict'

const I18n = require('i18n')
// 配置i18n
I18n.configure({
  locales: ['zh-CN'],
  defaultLocale: 'zh-CN',
  directory: __dirname + '/locale',
})

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605148712078_1819'

  // add your middleware config here
  config.middleware = ['robot']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  exports.view = {
    serverUrl: 'http://localhost:7001',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  }

  exports.robot = {
    ua: [/Baiduspider/i],
  }

  exports.security = {
    csrf: false,
  }

  config.validate = {
    translate() {
      const args = Array.prototype.slice.call(arguments)
      return I18n.__.apply(I18n, args)
    },
  }

  return {
    ...config,
    ...userConfig,
  }
}
