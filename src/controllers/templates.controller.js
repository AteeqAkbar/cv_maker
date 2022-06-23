const { templates } = require("../services/template.services");

const template = async (req,res)=>{
    try {
      
        const template = await templates(req,res)
        res.json({template})
    } catch (error) {
        
    }
}

module.exports = {template}