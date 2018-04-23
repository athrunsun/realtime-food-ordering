'use strict';

const Service = require('egg').Service;

class FoodService extends Service {
    async findAll() {
        return await this.ctx.model.Food.findAll();
    }
}

module.exports = FoodService;
