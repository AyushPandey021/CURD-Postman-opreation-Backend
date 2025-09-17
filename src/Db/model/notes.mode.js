const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    title:String,
    content:String
})
notemodel = mongoose.model("note",noteSchema)  // notes model ban gya ab ise use krna hoga index.js me 
module.exports = notemodel
// notes model ban gya ab ise use krna hoga index.js me



// What is a model ?
// model makes it easy to perform opreations (create,read ,update,delete) on the documents in a specific collection in the database.
// A model is a class with which we construct documents. In this case, each document will be a note with properties and behaviors as declared in our schema.
// Models are responsible for creating and reading documents from the underlying MongoDB database.
