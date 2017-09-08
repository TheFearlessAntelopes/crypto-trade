const minCurrencyProviderBaseUrl =
    'https://min-api.cryptocompare.com';

const currencyProviderBaseUrl =
    'https://www.cryptocompare.com';

const config = {
    headersObj: {
        'Content-Type': 'application/json',
    },
    coinListUrl: currencyProviderBaseUrl + '/api/data/coinlist/',
    coinDetailsById: currencyProviderBaseUrl + '/api/data/coinsnapshotfullbyid/?id=',
    coinPrice: minCurrencyProviderBaseUrl + '/data/price?fsym=',
    priceConversionValues: '&tsyms=USD,BTC',
    priceConversionForHistory: '&tsym=USD',
    currencyPricesHistoday: minCurrencyProviderBaseUrl + '/data/histoday?fsym=',
    currencyOHLCLimit: '&limit=400'
};

module.exports = config;
