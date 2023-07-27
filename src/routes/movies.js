const movieRouter = require('express').Router();
const { getUsersMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieValidation, movieIdValidation } = require('../middlewares/validation');

movieRouter.get('/', getUsersMovies);
movieRouter.post('/', movieValidation, createMovie);
movieRouter.delete('/:movieId', movieIdValidation, deleteMovie);

module.exports = movieRouter;
