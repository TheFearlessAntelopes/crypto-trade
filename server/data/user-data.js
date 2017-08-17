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

            // if (!userValidator.isValid(user)) {
            //     return Promise.reject();
            // }

            return usersCollection.insertOne(user);
        },
    };
};
