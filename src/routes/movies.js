const router = require('express').Router();
const { getUsersMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { movieValidation, movieIdValidation } = require('../middlewares/validation');

router.get('/', getUsersMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:movieId', movieIdValidation, deleteMovie);

module.exports = router;
