'use strict';

module.exports = {
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
