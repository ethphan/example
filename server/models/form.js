const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    option: {
        type: String,
        required: true
    },
    attachment: {
        type: Object,
        required: true
    },
})

module.exports = mongoose.model('formSchema', formSchema)