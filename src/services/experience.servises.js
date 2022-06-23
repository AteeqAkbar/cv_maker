const db =require("../models")

const userexperience = async (req,res) => {
try {
console.log('user experance serises');
    const {
        company_name, position,join_date,end_date,working, company_address
    }
        = req.body

    const userexperience = await db.Experience.create({

        company_name, position,join_date,end_date,working, company_address, user_id: res.locals.id

    });
 return userexperience
    
} catch (error) {
    return error
}
  
 
}
module.exports = {userexperience }
