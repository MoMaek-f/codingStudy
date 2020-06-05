const mongoose = require('mongoose')
const { Schema, model } = mongoose

const achievementSchema = new Schema({
    Id: {
      type: String,
      required: true
    },
    Java: {
      type: Number,
      required: false
    },
    JavaEE: {
      type: Number,
      required: false
    },
    Node:{
      type: Number,
      required: false
    },
    JavaScript: {
      type: Number,
      required: false
    },
    Vue: {
      type: Number,
      required: false
    },
    C: {
      type: Number,
      required: false
    },
    React: {
      type: Number,
      required: false
    }
})

module.exports =  model('achievement', achievementSchema)