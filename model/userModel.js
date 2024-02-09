const mongoose=require("mongoose")
const userSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        age:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        userPassword:{
            type:String,
            required:true
        }
        
    }
)

module.exports=mongoose.model("user",userSchema)