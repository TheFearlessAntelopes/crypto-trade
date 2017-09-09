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
            this.validateData(userObject);

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
                        ['currencies.' + currencyObj.currencySymbol + '.quantity']: currencyObj.quantity,
                        balance: -currencyObj.buyPrice * currencyObj.quantity
                    },
                    $set: { 
                        ['currencies.' + currencyObj.currencySymbol + '.id']: currencyObj.currencyId 
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
                        ['currencies.' + currencyObj.currencySymbol + '.quantity']: -currencyObj.quantity,
                        balance: currencyObj.sellPrice * currencyObj.quantity
                    },
                    $set: {
                        ['currencies.' + currencyObj.currencySymbol + '.id']: currencyObj.currencyId
                    }
                },
                {
                    upsert: true,
                    returnOriginal: false,
                }
            );
        },
        updateProfile(user) {
            this.validateData(user);

            return usersCollection.findAndModify(
                {
                    _id: usersCollection.generateId(user._id),
                },
                {
                    $set: { 
                        firstName: user.firstName, 
                        lastName: user.lastName, 
                        email: user.email 
                    },
                },
                {
                    returnOriginal: false,
                }
            );
        },
        validateData(user) {
            if (!user.username || user.username.length < 3) {
                throw new Error('Invalid username.');
            }

            if (!user.firstName || user.firstName < 3) {
                throw new Error('Invalid first name.');
            }

            if (!user.lastName || user.lastName < 3) {
                throw new Error('Invalid last name.');
            }

            if (!user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                throw new Error('Invalid email.');
            }
        },
    };
};
