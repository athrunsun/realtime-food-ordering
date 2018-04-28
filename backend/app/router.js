'use strict';

const routes = app => {
    const { router, controller, io } = app;
    router.get('/food/all', controller.food.allFood);
    router.get('/food/insertTestData', controller.food.insertTestData);
    io.of('/').route('ordering', io.controller.order.ordering);
};

module.exports = routes;
