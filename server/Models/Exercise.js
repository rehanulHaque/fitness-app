const mongoose = require("mongoose")

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    load: {
        type: String,
        required: true
    },
    reps: {
        type: String,
        required: true
    },
    id: {
        type: mongoose.Types.ObjectId,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("Exercise", exerciseSchema)