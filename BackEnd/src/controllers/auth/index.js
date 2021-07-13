const login = require('./login');
const changePassword = require('./changePassword');
const register = require('./register');

class controller {
  async login(req, res) {
    return await login(req, res);
  };
  async register(req, res) {
    return await register(req, res);
  };
  async changePassword(req, res) {
    return await changePassword(req, res);
  };
}

module.exports = new controller();
