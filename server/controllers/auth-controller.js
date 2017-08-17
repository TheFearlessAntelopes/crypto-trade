module.exports = ({ userData }, hashGenerator) => {
    return {
        registerUser(req, res) {
            const user = req.body;
            hashGenerator.generateHash(user.password)
                .then((hashedPassword) => {
                    user.hashedPassword = hashedPassword;

                    return userData.createUser(user);
                })
                .then(() => {
                    return res.json({ redirectUrl: '/auth/login' });
                })
                .catch((err) => {
                    return res
                    .json({ errorMessage: 'Could not register user!' });
                });
        },
    };
};

