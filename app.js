const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        reqc: {
            demand: true,
            alias: 'reqcurrency',
            describe: 'Request currency',
            string: true
        },
        resc: {
            demand: true,
            alias: 'rescurrency',
            describe: 'Response currency',
            string: true
        }

    })
    .help()
    .alias('help', 'h')
    .argv

let reqCurrency = argv.reqc;
let resCurrency = (argv.resc).replace(/\s*,\s*/g, ",");

request({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${reqCurrency}&tsyms=${resCurrency}`,
    json: true
}, (error, response, body) => {
    console.log(body);
});