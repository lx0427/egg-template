'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    await ctx.render('test.nj', { name: 'view test' })
  }
}

module.exports = HomeController
