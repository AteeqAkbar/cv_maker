const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    console.log(req.cookies.JWT)

    jwt.verify(req.cookies.JWT, "key", function (err, decoded) {
        // console.log(decoded.id,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>") //id
        if (decoded) {
            res.locals.id=decoded.id
            next()
        } else {
            res.redirect("http://localhost:3000/home")

        }
    });
}
module.exports = auth