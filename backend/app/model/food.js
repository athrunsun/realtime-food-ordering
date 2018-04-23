'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Food = app.model.define(
        'food',
        {
            food_id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: STRING(30),
            description: STRING(255),
        },
        {
            timestamps: false,
        },
    );

    return Food;
};
