const router = require('express').Router();
const { userValidation, userIdValidation } = require('../middlewares/validation');

const { getUserInfo, getUserById, updateUser } = require('../controllers/users');

router.get('/me', getUserInfo);
router.get('/:userId', userIdValidation, getUserById);
router.patch('/me', userValidation, updateUser);

module.exports = router;
