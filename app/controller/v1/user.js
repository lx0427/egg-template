const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    this.ctx.body = 'index'
  }

  async new() {
    this.ctx.body = 'new'
  }

  async create() {
    this.ctx.body = 'create'
  }

  async show() {
    this.ctx.body = 'show'
  }

  async edit() {
    this.ctx.body = 'edit'
  }

  async update() {
    this.ctx.body = 'update'
  }

  async destroy() {
    this.ctx.body = 'destroy'
  }
}

module.exports = UserController
