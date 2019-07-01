const mongoose = require('mongoose')
const Schema = mongoose.Schema

let passwordSchema = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    website: {
        type: String,
    },
    email: {
        type: String,
    }
})

const Password = mongoose.model('Password', passwordSchema)

module.exports = Password