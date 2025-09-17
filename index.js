const express = require('express')
const connectDB = require("./src/Db/db")
const notemodel = require("./src/Db/model/notes.mode")

// server database se connect  index.js

connectDB()

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
    
})
app.post('/notes',async(req,res)=>{
    const {title ,content}= req.body
    console.log(title,content);
    await  notemodel.create({title,content})

    res.json({message:"note added✅"})
    
    
})
app.listen(3000,()=>{
    console.log("Start✅");

    
})

 
// mongoose use is connect to express to mongodb server