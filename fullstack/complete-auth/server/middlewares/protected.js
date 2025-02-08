const jwt = require("jsonwebtoken")
exports.privateRoute = (req, res, next) => {

    if (!req.cookies.kahipn) {
        return res.status(401).json({ message: "no cookie found" })
    }
    //                                                      👇 from login controller { _id: result._id, name: result.name }
    jwt.verify(req.cookies.kahipn, "secretpassword", (err, data) => {
        if (err) {
            return res.status(401).json({ message: "jwt error" })
        }
        console.log(data)
        next()
    })
}