const request = require('request');
const yargs = require('yargs');

const reqc = {
    demand: true,
    alias: 'reqcurrency',
    describe: 'Request currency',
    string: true
}

const resc = {
    demand: true,
    alias: 'rescurrency',
    describe: 'Response currency',
    string: true
}

const argv = yargs
    .command('value', 'Find value of selected currency', {
        request: reqc,
        response: resc
    })
    .command('list', 'Request coin list')
    .command('rsd', 'Fetch RSD value for selected currency', {
        request: resc
    })
    .help()
    .alias('help', 'h')
    .argv

let command = argv._[0]

if (command === 'list') {
    request({
        url: 'https://min-api.cryptocompare.com/data/all/coinlist',
        json: true
    }, (error, response, body) => {
        console.log(body);
    })
} else if (command === 'value') {
    let reqCurrency = (argv.request).replace(/\s*,\s*/g, ",");
    let resCurrency = (argv.response).replace(/\s*,\s*/g, ",");
    request({
        url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${reqCurrency}&tsyms=${resCurrency}`,
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
} else if (command === 'rsd') {
    let reqCurrency = (argv.request).replace(/\s*,\s*/g, ",");
    request({
        url: `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${reqCurrency}&tsyms=RSD`,
        json: true
    }, (error, response, body) => {
        console.log(body);
    });
}