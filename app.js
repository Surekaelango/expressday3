const express=require('express')
const app=express()
const PORT=3500
const taskRoute=require("./routes/taskRoute")
app.use(express.json())
app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello World"})
})
app.use('/api/v1/tasks',taskRoute)
app.listen(PORT,()=>console.log(`Server Running at http://localhost:${PORT}`))