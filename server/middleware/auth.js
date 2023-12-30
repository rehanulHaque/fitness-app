const jwt = require("jsonwebtoken")
const User = require("../Models/User")

const auth = async (req, res, next) => {
    try {
        const header = req.headers.authorization
        const id = jwt.verify(header, process.env.SECRET)
        res.userId = id.id
        next()
    } catch (error) {
        res.status(401).send({error: "Please authenticate using a valid token"})
    }
}

module.exports = auth