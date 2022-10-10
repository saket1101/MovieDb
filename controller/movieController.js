const express = require("express")
// const movieRouter = require("../routers/movieRouter")
const Movie = require("../models/movieModels")
const { read } = require("fs")

// Create Movie
const createMovie = async (req, res) => {
    const { title, description, creator } = req.body

    const movie = new Movie({
        title,
        description,
        creator
    });
    try {
        await movie.save()
        res.status(200).json({
            message: "movie created successfully",
            movie: movie
        })
    } catch (error) {
        res.status(500).json(
            error.message
        )
    }
}
// get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({
            movies: movies
        })
    } catch (error) {
        res.json(error.message)
    }
}
// get movie by id
const getMovieById = async (req, res) => {
    const id = req.params.id
    try {
        const movie = await Movie.findById({ _id: id })
        res.status(200).json({ movie: movie })
    }
    catch (error) {
        res.json(error.message)
    }
}
// pegination
const getAllPage = async (req, res) => {
    const { page = 1, size = 10 } = req.query
    const limit = size
    try {
        const movies = await Movie.find().limit(limit * 1).skip((page - 1) * limit)
        res.status(200).json({
            Total:movies.length,
            movies: movies
        })
    } catch (err) {
        res.json(err.message)
    }
}
module.exports = {
    createMovie, getAllMovies, getMovieById, getAllPage
}