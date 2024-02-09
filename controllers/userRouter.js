const express=require("express")
const router=express.Router()
const bcrypt=require("bcryptjs")
const userModel = require("../model/userModel")

hashedPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.userPassword

    const hashedPassword=await hashedPasswordGenerator(password)
    data.userPassword=hashedPassword
    let user=new userModel(data)
    let result=user.save()
    res.json({
        status:"success"
    })
})

module.exports=router
