const Router = require('express');
const router = new Router();
const loginMiddleware = require('./middleware/loginMiddleware');
const AuthController = require('./controllers/auth/index');

router.post('/auth', AuthController.login);
router.post('/auth/register', AuthController.register);
router.post('/auth/changePassword', AuthController.changePassword);

module.exports = router;
