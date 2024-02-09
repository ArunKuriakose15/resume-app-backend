const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userRoutes=require("./controllers/userRouter")
const userDataRoutes=require("./controllers/userDataRouter")

const app=express()
app.use(express.json())
app.use(cors())


app.use("/api/user",userRoutes)
app.use("/api/data",userDataRoutes)

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/resumeDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.listen(3001,()=>{
    console.log("server running")
})