var util = {};

// functions
util.parseError = function(errors) {
    var parsed = {};
    if (errors.name == "ValidationError") {
        for (var name in errors.errors) {
            var validationError = errors.errors[name];
            parsed[name] = { message: validationError.message };
        }
    } else if (errors.code == "11000" && errors.errmsg.indexof("username") > 0) {
        parsed.username = { message: "This username already exists!" };
    } else {
        parsed.unhandled = JSON.stringify(errors);
    }
    return parsed;
};

util.isLoggedin = function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash('errors', { login: 'Pleas login first' });
        res.redirect('/login');
    }
}

util.noPermission = function(req, res) {
    req.flash('errors', { login: "You don't have permossion" });
    req.logout();
    res.redirect('/login');
}

module.exports = util;