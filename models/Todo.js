const mongoose = require("mongoose");
const { type } = require("os");

const todoschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports=mongoose.model("todo",todoschema)