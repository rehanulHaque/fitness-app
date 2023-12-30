const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.register = async function (name, email, password) {
    if (!name || !email || !password) {
        throw new Error("All fields are required")
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await this.create({ name, email, password: hashPassword })
    return user
}

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) {
        throw new Error("Incorrect email")
    }
    const matchPassword = await bcrypt.compare(password, user.password)
    if(!matchPassword) {
        throw new Error("Incorrect password")
    }
    const token = jwt.sign({id: user._id}, process.env.SECRET, { expiresIn: "30d" })
    return {token, id: user._id}
}

module.exports = mongoose.model("User", userSchema)