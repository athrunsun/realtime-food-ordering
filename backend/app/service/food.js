'use strict';

const Service = require('egg').Service;

class FoodService extends Service {
    async findAll() {
        return await this.ctx.model.Food.findAll();
    }

    async insertTestData() {
        const { Food } = this.ctx.model;

        Food.bulkCreate([
            { name: '醉秋风（双人餐）', description: '士林鸡排饭+红豆抹茶 台湾1号卤肉饭+鲜果杏桃汁', price: 74 },
            {
                name: '食力满满（双人餐）',
                description: '雅美照烧鸡肉饭+香橙莓果C，酱汁手打肉丸儿饭+红莓黑加仑',
                price: 79,
            },
            {
                name: '台南土豆烧肉便当',
                description: '土豆与红烧肉天生搭配好滋味，粉糯的土豆、醇厚的五花肉，入口留香让人欲罢不能。',
                price: 29,
            },
            { name: '剁椒牛肉便当', description: '一款鲜辣口味便当。只为无辣不欢的你。', price: 30 },
            { name: '川味香肠便当', description: '川味的！年味的！家的味道！限时过年前后供应哈！', price: 28 },
            {
                name: '芝士谷醇（新品）',
                description: '醇醇芝香，粒粒谷香，醇厚的香甜口感，如同暖流般涌入心底。',
                price: 12,
            },
            { name: '小盛夏套餐', description: '正味三杯鸡便当+森香蔓越莓', price: 40 },
            { name: '狼牙土豆', description: '小份－可备注要麻辣，香辣或者糖醋味的。', price: 5.5 },
            { name: '鸡蛋羹', description: '温水打蛋，1: 1.5的蛋水比例，大火8分钟蒸煮出嫩滑清爽的口感', price: 5 },
            {
                name: '卤肉饭+番茄炒蛋双拼',
                description: '人气火爆的卤肉饭配上超级下饭的番茄炒蛋，客官，你不来一份吗？',
                price: 27,
            },
        ]);
    }
}

module.exports = FoodService;
