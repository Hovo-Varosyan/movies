const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,

    },
    password: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        enum: ["admin", "moderator", "user"],
        default: "user"
    },
    status: {
        type: String,
        enum: ["blocked", "allow"],
        default: 'blocked'
    },

    img: {
        type: String,
        default: "http://localhost:4000/images/default.jpg"
    },
    favorite: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: [],

    }
})

const userModel = mongoose.model('login', userSchema)
module.exports = userModel