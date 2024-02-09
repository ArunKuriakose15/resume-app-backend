const mongoose=require("mongoose")
const dataSchema=mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        profile:{
            type:String,
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        cgpa:{
            type:String,
            required:true
        },
        skills:{
            type:String,
            required:true
        },
        certificate:{
            type:String,
            required:true
        },
        photourl:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("userData",dataSchema)

