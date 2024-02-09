const express = require("express")
const router = express.Router()
const dataModel=require("../model/userDataModel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let dataObj=new dataModel(data)
    let result=await dataObj.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall", async (req, res) => {
    let data = await dataModel.find().populate("userId","name age phone email -_id").exec()
    res.json(data)
})


module.exports=router