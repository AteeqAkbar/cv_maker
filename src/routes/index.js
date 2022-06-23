const userRoute = require("./user.routes")
const templateRoute = require("./templates.route")
const express = require("express");
const router = express.Router()

const routes=[
{
    path:'/',
    route:userRoute
},
{
    path:'/templates',
    route:templateRoute
}

]
routes.forEach(rote => {
    router.use(rote.path, rote.route)

});
module.exports=router