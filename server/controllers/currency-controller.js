const fetch = require('node-fetch');
const currencyConf = require('../config/currency-conf');

module.exports = () => {
    return {
        getCoinList(req, res) {
            // console.log(currencyConf.coinListUrl);
            // console.log(req)
            fetch(currencyConf.coinListUrl)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return res.status(200)
                        .json({ results: json });
                })
                .catch((err) => {
                    return res.status(400)
                        .json({ errorMessage: 'Could not fetch coin list!' });
                })
        },
        getCoinDetailsById(req, res) {
            fetch(currencyConf.coinDetailsById + req.body.currencyId)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return res.status(200)
                        .json({ result: json })
                })
                .catch((err) => {
                    return res.status(400)
                        .json({ errorMessage: 'Could not fetch coin details!' });
                })
        },
        getPriceConversions(req, res) {
            fetch(currencyConf.coinPrice + req.body.symbol + currencyConf.priceConversionValues)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return res.status(200)
                        .json({ result: json })
                })
                .catch((err) => {
                    return res.status(400)
                        .json({ errorMessage: 'Could not fetch coin prices!' });
                })
        },
        getHistoryPrice(req, res) {
            fetch(currencyConf.currencyPricesHistoday + req.body.symbol +
                currencyConf.priceConversionForHistory + currencyConf.currencyOHLCLimit)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    return res.status(200)
                        .json({ result: json })
                })
                .catch((err) => {
                    return res.status(400)
                        .json({ errorMessage: 'Could not fetch coin prices!' });
                })
        }
    };
};
