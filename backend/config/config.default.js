'use strict';

const appConfig = appInfo => {
    const config = {};
    config.keys = 'bread-theory';
    config.defaultRoomName = 'room:food-ordering';
    config.broadcastEventName = 'broadcast';

    config.redis = {
        client: {
            port: 16379,
            host: '127.0.0.1',
            password: '',
            db: 0,
        },
    };

    config.io = {
        init: {
            wsEngine: 'uws',
        },
        namespace: {
            '/': {
                connectionMiddleware: ['connection'],
                packetMiddleware: [],
            },
        },
        redis: {
            host: '127.0.0.1',
            port: 16379,
        },
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'food_ordering',
        host: 'localhost',
        port: '13308',
        username: 'food_ordering_admin',
        password: 'athrun123',
    };

    config.logger = {
        //level: 'DEBUG',
        consoleLevel: 'DEBUG',
    };

    // https://github.com/eggjs/egg-cors#usage
    // exports.security = {
    //     domainWhiteList: ['http://localhost:3000'],
    // };

    // https://github.com/eggjs/egg-cors#configuration
    config.cors = {
        origin: '*',
        //allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }

    return config;
};

module.exports = appConfig;
