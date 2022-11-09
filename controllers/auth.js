exports.register = (reg, res, next) => {
    res.send("Register Route");
};

exports.login = (reg, res, next) => {
    res.send("Login Route");
};

exports.forgotpassword = (reg, res, next) => {
    res.send("Forgot Password Route");
};

exports.resetpassword = (reg, res, next) => {
    res.send("Reset Password");
};