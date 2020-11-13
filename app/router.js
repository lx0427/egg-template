'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/get-json', controller.home.getJson)
  router.get('/is-ios', controller.home.isIos)
  router.get('/test-logger', controller.home.testLogger)
  router.get(/^\/home\/([\w-.]+\/[\w-.]+)$/, controller.home.detail)

  // RESTful
  router.resources('user', '/api/v1/user', controller.v1.user)
}
