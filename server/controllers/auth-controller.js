module.exports = ({ userData }, hashGenerator) => {
    return {
        loginUser(req, res) {
            res
                .status(200)
                .json({
                    _id: req.user.id,
                    user: req.user,
                });
        },
        registerUser(req, res) {
            if (req.user) {
                return res.status(400).json({ errorMessage: 'User is already logged in!' })
            }

            const user = req.body;
            hashGenerator.generateHash(user.password)
                .then((hashedPassword) => {
                    user.hashedPassword = hashedPassword;

                    return userData.createUser(user);
                })
                .then(() => {
                    return res
                        .status(200)
                        .json({ successMessage: 'User successfully registered!' });
                })
                .catch((err) => {
                    return res
                        .status(400)
                        .json({ errorMessage: 'Could not register user!' });
                });
        },
        logoutUser(req, res) {
            req.session.destroy();
            res.json({ successMessage: 'Logout successfull!' })
        }
    };
};

