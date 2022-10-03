const express = require("express")
const movieController = require("../controller/movieController")
const movieRouter = express.Router()
const {createMovie,getAllMovies,getMovieById,getAllPage} = movieController

// CREATE MOVIE
movieRouter.post('/',createMovie)

//GET MOVIE BY ID
 movieRouter.get("/:id",getMovieById)

 // GET PEGINATED MOVIE PAGE BY PAGE AND SIZE
movieRouter.get("/",getAllPage)

//  GET ALL MOVIE
 movieRouter.get("/",getAllMovies)



module.exports = movieRouter