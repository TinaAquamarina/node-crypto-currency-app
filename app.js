const request = require('request');

request({
    url: 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=RSD',
    json: true
}, (error, response, body) => {

    console.log(`The price of the Bitcoin is ${body.RSD} RSD`);
});

//statusCode