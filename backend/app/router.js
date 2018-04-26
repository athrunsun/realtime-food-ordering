'use strict';

const routes = app => {
    const { router, controller, io } = app;
    router.get('food', '/food/all', controller.food.allFood);
    io.of('/').route('order', io.controller.order.ordering);
};

module.exports = routes;
