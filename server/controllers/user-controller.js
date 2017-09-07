module.exports = ({ userData }) => {
    return {
        getUserCurrencies(req, res) {
            return userData.getUserCurrencies(req.body.username)
                .then((results) => {
                    if (results.length > 0) {
                        res
                            .status(200)
                            .json({
                                currencies: results,
                            });
                    } else {
                        res
                            .status(400)
                            .json({
                                errorMessage: 'Oops, something went wrong!'
                            })
                    }
                })
        }
    };
};
