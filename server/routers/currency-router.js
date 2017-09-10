module.exports = ({ app, express, controllers }) => {
    const router = new express.Router();
    const { currencyController } = controllers;

    router.get('/listAll', currencyController.getCoinList);
    router.post('/getDetailsById', currencyController.getCoinDetailsById);
    router.post('/priceConversions', currencyController.getPriceConversions);
    router.post('/historyPrice', currencyController.getHistoryPrice);

    app.use('/currency', router);
};
