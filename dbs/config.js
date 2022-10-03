const mongoose = require("mongoose")

const DB_LINKS = "mongodb+srv://saket1101:saket1101@cluster0.mevjpho.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB_LINKS)
.then(()=>{
    console.log("Db is connected")
}).catch((err)=>{
    console.log("DB is not connected")
})