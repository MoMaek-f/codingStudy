const mongoose = require('mongoose')
const { Schema, model } = mongoose

const adminSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false // 不显示 
    },
    Identity: {
        type: String,
        required: true
    },
    Id: {
      type: Number,
      required: true
    }
})

module.exports =  model('Admin', adminSchema)