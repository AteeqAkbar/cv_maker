const db =require("../models")

const usersignin = async (req,res) => {
try {

    const {
        name,
        email,
        pass,subheading,about,pic,phone,location1
    }
        = req.body
        // console.log(location1,">>>>>>>>><<:LLKLL");

    const usersignin = await db.User.create({

        name,
        email,
        pass,subheading,about,pic,phone,location:location1

    });
 return usersignin
    
} catch (error) {
    return error
}}

const userlogin = async (req,res) => {
try {

    const {
        email,
        pass
    }
        = req.body
        // console.log(location1,">>>>>>>>><<:LLKLL");

    const userlogin = await db.User.findOne({where:{
        email:email,
        pass: pass
    }}
    );
 return userlogin
    
} catch (error) {
    return error
}
  
 
}

const usergetdata = async (req,res) => {
try {
  const userid= res.locals.id
    const userdata = await db.User.findByPk(
        userid,
        {
            include:[
                {
                    model:db.Skills,

                },
                {
                    model:db.Education,                    

                },
                {
                    model:db.Experience,                    

                },
            ],

        }
    );
    
 return userdata
    
} catch (error) {
    return error
}
  
 
}





module.exports = {usersignin ,userlogin,usergetdata}
