const express = require("express")
const config = require("./dbs/config")
const movieRouter = require("./routers/movieRouter")
const port = 4500 || process.env.PORT

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/movie",movieRouter)

app.get("/",(req,res)=>{
    res.send("hii")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})