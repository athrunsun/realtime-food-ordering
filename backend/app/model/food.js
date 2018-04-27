'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, DECIMAL } = app.Sequelize;

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
            price: DECIMAL(8, 2),
        },
        {
            // Rename/disable Timestamp columns: https://github.com/sequelize/sequelize/issues/791
            timestamps: false,
        },
    );

    return Food;
};
