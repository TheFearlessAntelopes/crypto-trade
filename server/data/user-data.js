module.exports = (usersCollection, models) => {
    const { User } = models;

    return {
        getAllUsers() {
            return usersCollection.find({});
        },
        getUserById(id) {
            // if (!userValidator.isValidId(id)) {
            //     return Promise.reject();
            // }

            return usersCollection.findById(id);
        },
        findUserBy(query) {
            return usersCollection.findOne(query);
        },
        createUser(userObject) {
            const user = new User(
                userObject.username,
                userObject.firstName,
                userObject.lastName,
                userObject.email,
                userObject.hashedPassword);

            return usersCollection.insertOne(user);
        },
        getUserCurrencies(username) {
            return usersCollection.find({ username: username },
                { 'currencies': 1 }
            )
        },
        buyCurrency(username, currencyObj) {
            return usersCollection.findAndModify(
                {
                    username: username
                },
                {
                    $inc: {
                    ['currencies.' + currencyObj.currencySymbol]: currencyObj.quantity,
                        balance: -currencyObj.buyPrice * currencyObj.quantity
                    }
                },
                {
                    upsert: true,
                    returnOriginal: false,
                }
            );
        },
        sellCurrency(username, currencyObj) {
            return usersCollection.findAndModify(
                {
                    username: username
                },
                {
                    $inc: {
                    ['currencies.' + currencyObj.currencySymbol]: -currencyObj.quantity,
                        balance: currencyObj.sellPrice * currencyObj.quantity
                    }
                },
                {
                    upsert: true,
                    returnOriginal: false,
                }
            );
        },
        updateProfile(user) {
            return usersCollection.findAndModify(
                {
                    _id: usersCollection.generateId(user._id),
                },
                {
                    $set: { firstName: user.firstName, lastName: user.lastName, email: user.email },

                },
                {
                    returnOriginal: false,
                }
            );
        },
    };
};
