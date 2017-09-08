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
        },
        loadProfilePage(req, res, next) {
            return userData.getUserById(req.user._id)
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
                    if (response != null) {
                        return res.status(200);
                    }
                })
                .catch(() => res.status(400));
        },
    };
};
