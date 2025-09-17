const express = require('express')
const connectDB = require("./src/Db/db")
const notemodel = require("./src/Db/model/notes.mode")

// server database se connect  index.js

connectDB()

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello")

})
// added    `
app.post('/notes', async (req, res) => {
    const { title, content } = req.body
    console.log(title, content);
    await notemodel.create({ title, content })

    res.json({ message: "note added✅" })


})
// fetch
app.get('/notes', async (req, res) => {
    notes = await notemodel.find()
    res.json({
        message: "Notes fetched✅",
        notes
    })
})
// delete
app.delete('/notes/:id', async (req, res) => {
    const noteid = req.params.id
    await notemodel.findByIdAndDelete({ _id: noteid }) 
    res.json({message: "note deleted✅"})
})
// update

app.patch('/notes/:id', async (req, res) => {
    const noteid = req.params.id
    const { title, content } = req.body
    await notemodel
        .findByIdAndUpdate(noteid, { title, content })
    res.json({message: "note updated✅"})
})
app.listen(3000, () => {
    console.log("Start✅");


})


// mongoose use is connect to express to mongodb server