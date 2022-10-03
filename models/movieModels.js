const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    creator:{  // this is for user id of creator
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Movie",movieSchema)