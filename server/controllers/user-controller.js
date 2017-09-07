module.exports = ({ userData }) => {
    return {
        loadProfilePage(req, res, next) {
            // console.log(req.user);
            
            userData.getUserById(req.user._id)
                .then((user) => {
                    // console.log(user);
                    res
                        .status(200)
                        .json({
                            user
                        });
                })

            // console.log(user);
            // res
            //     .status(200)
            //     .json({
            //         user: user,
            //         username: user.username,
            //         firstName: user.firstName,
            //         lastName: user.lastName,
            //         email: user.email,
            //         dateJoined: user.dateJoined,
            //     });
        },
        updateProfile(req, res) {
            // to be fixed
            userData.updateProfile(req.body)
                .then(() => res.status(200))
                .catch(() => res.status(400));
        },
    };
};
