/* eslint valid-jsdoc: "off" */

'use strict'

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

  return {
    ...config,
    ...userConfig,
  }
}
