const router = require("express").Router()
const Exercise = require("../Models/Exercise")
const auth = require("../middleware/auth")

router.post('/create', auth, async(req, res) => {
    try {
        const {name, load, reps} = req.body
        const exercise = await Exercise.create({name, load, reps, id: res.userId})
        res.status(200).json("ok")
    } catch (error) {
        console.log(error.message)
        res.json({error: error.message})
    }
})

router.get('/', auth, async(req, res)=>{
    try {
        const exercises = await Exercise.find({id: res.userId})
        res.json(exercises)
    } catch (error) {
        console.log(error.message)
        res.json({error: error.message})
    }
})

router.delete('/delete', auth, async(req, res)=>{
    try {
        const {id} = req.body
        const exercise = await Exercise.findByIdAndDelete({id: res.userId, _id: id})
        res.json('ok')
    } catch (error) {
        console.log(error.message)
        res.json({error: error.message})
    }
})

module.exports = router