const mongoose = require('mongoose')
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false // 不显示 
    },
    Id: {
        type: Number,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    Identity: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    college:{
        type: String,
        required: true
    },
    Political_outlook: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    }
})

module.exports =  model('User', userSchema)