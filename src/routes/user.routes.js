const  express= require("express")
const  usercontroller = require("../controllers/user.controller")
const auth = require("../middlewares/auth")
const router = express.Router()

router.route('/signin')
.get(usercontroller.signinForm)
.post(usercontroller.signin)

router.route('/login')
.get(usercontroller.loginForm)
.post(usercontroller.login)

router.route('/skills')
.get(auth,usercontroller.skillForm)
.post(auth,usercontroller.skills)

router.route('/education')
.get(auth,usercontroller.educationForm)
.post(auth,usercontroller.education)

router.route('/experience')
.get(auth,usercontroller.experienceForm)
.post(auth,usercontroller.experience)

router.route('/home')
.get(auth,usercontroller.home)
.post(auth,usercontroller.experience)

router.route('/getdata')
.get(auth,usercontroller.getdata)
.post(auth,usercontroller.experience)

module.exports=router