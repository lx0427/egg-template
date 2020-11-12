'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('test.nj', { name: 'view test' })
  }
  async getJson() {
    const { ctx } = this
    const res = await ctx.curl(this.config.view.serverUrl + '/public/json/01.json', { dataType: 'json' })
    ctx.body = res.data
  }
}

module.exports = HomeController
