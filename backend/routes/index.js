var express = require('express');
const Login = require('../controllers/login');
var router = express.Router();
const userRouter=require('./users');
const JwtVerification = require('../utils/jwtverification');
console.log(router)
/* GET home page. */
router.get('/', function (req, res, next) {
});
router.post('/register', Login.register)
router.post('/login', Login.login)
router.get('/login', JwtVerification, (req,res)=>{
  if (req.user) {
    return res.status(200).json({ id: req.user.id });
} else {
    return res.status(401).json({ message: "Unauthorized" });
}
})


router.use('/user', userRouter)

module.exports = router;
