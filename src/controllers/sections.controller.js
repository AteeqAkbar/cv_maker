const { section, getSection } = require("../services/section.services");

const sections = async (req,res)=>{
    try {
      
        const sections = await section(req,res)
        res.json({sections})
    } catch (error) {
        
    }
}

const getSections = async (req,res)=>{
    try {
        console.log("I'm in the get Api")
        const getSectionsData = await getSection(req,res)
        res.json(getSectionsData)
    }
     catch (error) {
        
    }
}

module.exports = {sections,getSections}