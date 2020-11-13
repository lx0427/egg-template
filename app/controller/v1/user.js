const Controller = require('egg').Controller

class UserController extends Controller {
  async index() {
    this.ctx.body = 'index'
  }

  async show() {
    this.ctx.body = 'show'
  }

  async create() {
    this.ctx.body = 'create'
  }

  async update() {
    this.ctx.body = 'update'
  }

  async destroy() {
    this.ctx.body = 'destroy'
  }

  async new() {
    this.ctx.body = 'new'
  }

  async edit() {
    this.ctx.body = 'edit'
  }
}

module.exports = UserController
