const db =require("../models")

const usereducation = async (req,res) => {
try {

    const {
        degree,join_date,end_date,insititute,
    }
        = req.body

    const usereducation = await db.Education.create({

        degree,join_date,end_date,insititute,user_id: res.locals.id

    });
 return usereducation
    
} catch (error) {
    return error
}
  
 
}
module.exports = {usereducation }
