const { userskils } = require("../services/skills.servises");
const { usersignin, userlogin, usergetdata } = require("../services/user.servises")
const path = require('path')
const jwt = require('jsonwebtoken');
const { usereducation } = require("../services/education.servises");
const { userexperience } = require("../services/experience.servises");



const signinForm = (req,res)=>{
    try {

        res.render("userForm")
    } catch (error) {
        res.send(error)
    }
}

const signin = async(req,res)=>{
    try {
console.log("login");

const users = await usersignin(req,res)
console.log(users.id,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
const token = jwt.sign({ id: users.id }, "key");

// console.log(token);
res.cookie("JWT", token, { httpOnly: true, })
// res.redirect("http://localhost:3000/signin")
res.send('ok')
 } catch (error) {
        
    }
}


const loginForm = (req,res)=>{
    try {

        res.render("loginForm")
    } catch (error) {
        res.send(error)
    }
}

const login = async(req,res)=>{
    try {
console.log("login");

const users = await userlogin(req,res)
if(users){
    console.log(users,">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    const token = jwt.sign({ id: users.id }, "key");
    
    // console.log(token);
    res.cookie("JWT", token, { httpOnly: true, })
    // res.redirect("http://localhost:3000/signin")
    res.send({status : true})
}
else{
    console.log("user is not registred")
    res.send({status:false})
}

 } catch (error) {
        
    }
}


const skillForm = (req,res)=>{
    try {
        console.log("kl");  
        res.render("skillForm")
    } catch (error) {
        
    }
}

const skills = async(req,res)=>{
    try {
console.log("skills");

const skill = await userskils(req,res)
console.log(skill);
      res.send({status:true})

    } catch (error) {
        res.send(error)
    }
}






const educationForm = (req,res)=>{
    try {
        console.log("education");
        res.render("educationForm")
    } catch (error) {
        
    }
}

const education = async(req,res)=>{
    try {
console.log("education");

const education = await usereducation(req,res)
console.log(education);
      res.send({status:true})

    } catch (error) {
        res.send(error)
    }
}

const experienceForm = (req,res)=>{
    try {
        console.log("experience form");
        res.render("experienceForm")
    } catch (error) {
        
    }
}

const experience = async(req,res)=>{
    try {
console.log("experience");

const experiences = await userexperience(req,res)
console.log(experiences);
      res.send({status:true})

    } catch (error) {
        res.send(error)
    }
}

const home = async (req,res)=>{
    try {
        console.log("home");
        // const template = await templates(req,res)
        // console.log("============================>>>>>>>>>>>>>>>>>>>>",template)
        res.sendFile(path.join(__dirname+'../../public/tamp.html'));
    } catch (error) {
        
    }
}



const getdata = async(req,res)=>{
    try {
console.log("getdata");

const getdata= await usergetdata(req,res)
console.log(getdata);
    //   res.send({status:true})
    res.send(getdata)

    } catch (error) {
        res.send(error)
    }
}


module.exports={
    signinForm,
    signin,
    loginForm,
    skillForm,
    skills,
    educationForm,
    education,
    experienceForm,
    experience,
    home,
    login,
    getdata

}