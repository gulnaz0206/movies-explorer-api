const router = require('express').Router();
const { authValidation, regValidation } = require('../middlewares/validation');
const { login, createUser } = require('../controllers/users');
const moviesRouter = require('./movies');
const userRouter = require('./users');
const auth = require('../middlewares/auth');
const NotFound = require('../errors/NotFound');

router.post('/signin', authValidation, login);
router.post('/signup', regValidation, createUser);
router.use(auth);
router.use('/users', userRouter);
router.use('/movies', moviesRouter);

router.use('*', (req, res, next) => {
  next(new NotFound('Страница не найдена'));
});
