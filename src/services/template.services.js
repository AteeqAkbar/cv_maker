const db =  require('../models')

const templates = async (req,res)=>{
    const templateData = await db.Template.findAll()
    return templateData
}

module.exports = {templates}