module.exports = {
    validateUser(user) {
        if (!user.firstName || user.firstName.length < 3) {
            throw new Error('Invalid first name length.');
        }

        if (!user.lastName || user.lastName.length < 3) {
            throw new Error('Invalid last name length.');
        }

        if (!user.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            throw new Error('Invalid email.');
        }
    },
}