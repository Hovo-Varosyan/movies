const jwt = require("jsonwebtoken");

function JwtVerification(req, res, next) {
    try {
        const cookies = req.signedCookies["t_user"];
        if (cookies) {

            const token = jwt.verify(cookies, process.env.TOKEN_KEY);
            if (token) {
                req.user = token;
                next();
            } else {
                res.clearCookie('t_user', {  domain: 'localhost' })
                res.status(401).json({ message: "JWT false" })
            }
        } else {
            res.status(401).json({ message: "JWT false" })
        }

    } catch (err) {
        res.status(401).json({ message: "Token error" })
    }
}

module.exports = JwtVerification;
