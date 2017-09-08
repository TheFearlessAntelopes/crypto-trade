module.exports = ({ userData }) => {
    return {
        getUserCurrencies(req, res) {
            return userData.getUserCurrencies(req.body.username)
                .then((results) => {
                    if (results.length > 0) {
                        res
                            .status(200)
                            .json({
                                currencies: results[0].currencies,
                            });
                    } else {
                        res
                            .status(400)
                            .json({
                                errorMessage: 'Oops, something went wrong!'
                            })
                    }
                })
        },
        buyCurrency(req, res) {
            return userData.buyCurrency(req.body.user, req.body.info)
                .then((response) => {
                    return res.status(200)
                        .json({});
                })
                .catch((err) => {
                    return res.status(400)
                        .json({
                            errorMessage: 'Oops, something went wrong!'
                        });
                })
        },
        sellCurrency(req, res) {
            return userData.sellCurrency(req.body.user, req.body.info)
            .then((response) => {
                return res.status(200)
                    .json({});
            })
            .catch((err) => {
                return res.status(400)
                    .json({
                        errorMessage: 'Oops, something went wrong!'
                    });
            })
        },
        loadProfilePage(req, res) {
            return userData.findUserBy({ username: req.body.user })
                .then((user) => {
                    res
                        .status(200)
                        .json({
                            user
                        });
                })
        },
        updateProfile(req, res) {
            return userData.updateProfile(req.body)
                .then((response) => {
                    if (response !== null) {
                        return res
                            .status(200)
                            .json({ successMessage: 'Profile updated!' });
                    }
                })
                .catch(() => {
                    return res
                        .status(400)
                        .json({ errorMessage: 'Could not update profile!' });
                });
        },
    };
};
