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
        updateProfile(user) {
            // console.log(user);

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
