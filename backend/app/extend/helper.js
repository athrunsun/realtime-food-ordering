'use strict';

module.exports = {
    parseMsg(msg) {
        return {
            meta: msg.meta,
            payload: msg.payload,
        };
    },

    normalizeMsg(payload = {}, metadata = {}) {
        const meta = Object.assign(
            {},
            {
                timestamp: Date.now(),
            },
            metadata,
        );

        return {
            meta,
            payload,
        };
    },
};
