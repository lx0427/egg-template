'use strict'

const { Controller } = require('egg')

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('test.nj', { name: 'view test', time: 1605139200 })
  }
  async getJson() {
    const { ctx } = this
    const res = await ctx.curl(this.config.view.serverUrl + '/public/json/01.json', { dataType: 'json' })
    ctx.body = res.data
  }
  async isIos() {
    this.ctx.body = `isIOS: ${this.ctx.isIOS}`
  }
  async testLogger() {
    this.logger.info('this logger')
    this.logger.error('this logger')
    this.ctx.logger.info('ctx logger')
    this.ctx.logger.error('ctx logger')
    this.app.logger.info('app logger')
    this.app.logger.error('app logger')
    this.ctx.body = 'test logger'
  }
  async detail() {
    const { ctx } = this
    ctx.body = JSON.stringify(ctx.params)
  }
}

module.exports = HomeController
