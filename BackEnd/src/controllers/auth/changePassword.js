const User = require('../../modules/user');
const bcrypt = require('bcryptjs');

module.exports = async function (req, res) {
  try {
    const { login, newPassword } = req.body;
    if (!login || !newPassword) {
      return res.status(400).json({message: `Не переданы параметры`});
    }
    const user = await User.findOne({login: login});
    if (!user) {
      return res.status(400).json('err');
    }
    user.password = bcrypt.hashSync(newPassword, 7);
    await user.save();
    return res.status(200).json({message: 'OK'})
  } catch (e) {
    console.log(e);
    res.status(400).json({message: 'Register error'});
  }
}
