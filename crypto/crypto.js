const request = require('request');

let getCryptoValue = (fsym, tsyms, callback) => {

    let encodedReqCurrency = encodeURIComponent(fsym);
    let encodedResCurrency = encodeURIComponent(tsyms);

    request({
        url: `https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=RSD`,
        json: true
    }, (error, response, body) => {
        if(error) {
            callback('Unable to connect to Cryptocompare servers');
        } else if (body.Response === 400) {
            callback('Request error');
        } else if (body.Response === 200) {
            callback(undefined, {
                fsym: body.data
            });
        }
    });
}

module.exports.getCryptoValue = getCryptoValue;