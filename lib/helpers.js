const crypto = require('crypto');
const { type } = require('os');

const hashingSecret = 'sulduBuldu';
const helpers = {};

helpers.parseJson = str => {
    try {
        const obj = JSON.parse(str);
        return obj;
    } catch (error) {
        return {};
    }
}

helpers.hash = str => {
    if (typeof str === 'string' && str !== '') {
        return crypto.createHmac('sha512', hashingSecret).update(str).digest('hex');
    } else {
        return false;
    }
}

module.exports = helpers;

// sdf
// wer


// a + secret (salt) -> sdflihdbfkalsbfkjasdkf
// b + secret (salt) -> fbajkfkadnfijkkfnjwelf


// a -> sdf
// a -> sdf
// a -> sdf
// a -> sdf