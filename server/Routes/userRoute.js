const router = require("express").Router()
const User = require("../Models/User")
const auth = require("../middleware/auth")

router.get("/", (req, res) => {
    res.json("hii")
})

router.post('/register', async(req, res)=>{
    const { name, email, password } = req.body
    try {
        const user = await User.register( name, email, password )
        res.json("ok")
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})

router.post('/login', async(req, res)=>{
    const { email, password } = req.body
    try {
        const user = await User.login( email, password )
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})

router.get('/profile',auth, async(req, res)=>{
    try {
        const user = await User.findById(res.userId)
        res.json({
            name: user.name,
            email: user.email,
            _id: user._id,
            loggedIn: true
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})

router.get('/check', auth, async(req, res)=>{
    try {
        const user = await User.findById(res.userId)
        if(user) res.json(true)
        else res.json(false)
    } catch (error) {
        console.log(error.message)
        res.status(400).json(error.message)
    }
})
module.exports = router