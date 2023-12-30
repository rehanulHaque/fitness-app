require("dotenv").config()
const express = require('express')
const cors = require("cors")
const app = express()
const connectDatabase = require("./DB/connectDatabase")
const userRouter = require("./Routes/userRoute")
const exerciseRoute = require("./Routes/exerciseRoute")

app.use(cors())
app.use(express.json())
app.use('/api/v1/auth', userRouter)
app.use('/api/v1/app', exerciseRoute)

connectDatabase()
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})