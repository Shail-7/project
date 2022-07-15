const authentication = (req, res, next) => {

    if (!req.session.user) {
        res.status(401).json({ msg: "Unauthorized User" });
    }
    else {
        next();
    }

}

module.exports = authentication;