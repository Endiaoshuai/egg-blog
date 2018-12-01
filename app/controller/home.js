'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, e';
    this.logger.warn('current user: %j');
  }
}

module.exports = HomeController;
