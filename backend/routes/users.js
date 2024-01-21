var express = require('express');
const JwtVerification = require('../utils/jwtverification');
const Login = require('../controllers/login');
const User = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.get("/:id", JwtVerification, async (req, res, next) => {
  try {
    return res.status(200).json({ user: req.user })
  } catch (err) {
    return res.status(500).json({ message: '520 Unknown error' })
  }
});
router.post('/logout', Login.logout)
router.post('/name', User.reName)
router.post('/delete', User.delete)
module.exports = router;
