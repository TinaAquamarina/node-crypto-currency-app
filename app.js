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

let encodedReqCurrency = encodeURIComponent(argv.reqc);
let encodedResCurrency = encodeURIComponent(argv.resc);

// console.log(argv);

request({
    url: `https://min-api.cryptocompare.com/data/price?fsym=${encodedReqCurrency}&tsyms=${encodedResCurrency}`,
    json: true
}, (error, response, body) => {

    console.log(body);
});

//statusCode