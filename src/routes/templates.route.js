const  express= require("express")
const  templateController = require("../controllers/templates.controller")
const  sectionController = require("../controllers/sections.controller")
const router = express.Router()

router.route('/')
.get(templateController.template)

router.route('/section')
.get(sectionController.getSections)
.post(sectionController.sections)

module.exports=router