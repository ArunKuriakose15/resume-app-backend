const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const userModel = require("../model/userModel")

hashedPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup", async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.userPassword

    const hashedPassword = await hashedPasswordGenerator(password)
    data.userPassword = hashedPassword
    let user = new userModel(data)
    let result = user.save()
    res.json({
        status: "success"
    })
})

router.post("/login", async (req, res) => {
    let input = req.body
    let eMail = req.body.email
    let data = await userModel.findOne({ "email": eMail })
    if (!data) {
        return res.json({ status: "invalid user" })
    } 
    else {
        let dbPassword=data.userPassword
        let inputPassword=req.body.userPassword
        const match=await bcrypt.compare(inputPassword,dbPassword)
        if(!match){
            return res.json({status:"invalid password"})
        }
        else{
            return res.json({status:"success"})
        }

    }
})

module.exports = router
