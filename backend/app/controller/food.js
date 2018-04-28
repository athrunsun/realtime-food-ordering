'use strict';

const Controller = require('egg').Controller;

class FoodController extends Controller {
    async allFood() {
        const foods = await this.ctx.service.food.findAll();
        this.ctx.body = foods;
        this.ctx.status = 200;
    }

    async insertTestData() {
        await this.ctx.service.food.insertTestData();
        this.ctx.body = this.ctx.helper.normalizeMsg({}, { msg: 'Test data inserted succeeded!' });
        this.ctx.status = 201;
    }
}

module.exports = FoodController;
