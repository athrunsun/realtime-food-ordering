'use strict';

const Controller = require('egg').Controller;

class FoodController extends Controller {
    async allFood() {
        const ctx = this.ctx;
        const foods = await ctx.service.food.findAll();
        ctx.body = foods;
        ctx.status = 200;
    }
}

module.exports = FoodController;
