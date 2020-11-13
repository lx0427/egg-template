const Controller = require('egg').Controller

const createRule = {
  username: {
    type: 'email',
  },
  password: {
    type: 'password',
    compare: 're-password',
  },
  age: 'int?',
}
class UserController extends Controller {
  async index() {
    this.ctx.body = 'index'
  }

  async show() {
    this.ctx.body = 'show'
  }

  async create() {
    const { ctx } = this
    // 如果校验报错，会抛出异常
    ctx.request.body.age = +ctx.request.body.age
    console.log(ctx.request.body)
    ctx.body = await this.app.validator.validate(createRule, ctx.request.body)
    // try {
    //   ctx.body = await ctx.validate(createRule, ctx.request.body)
    // } catch (error) {
    //   ctx.body = error
    // }
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
