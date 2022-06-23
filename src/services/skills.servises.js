const db =require("../models")

const userskils = async (req,res) => {
try {

    const {
        name,
    }
        = req.body
console.log(res.id,"in skills");
    const userskils = await db.Skills.create({

        name,
        user_id: res.locals.id

    });
 return userskils
    
} catch (error) {
    return error
}
  
 
}
module.exports = {userskils }
