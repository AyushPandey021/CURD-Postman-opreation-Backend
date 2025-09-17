const mongoose = require("mongoose")
// server database se kese connect hoga ye db.js file me write hoga 
function connectDB(){
    
    mongoose.connect("mongodb+srv://vlogayush51_db_user:xgYQHDmAQc98pGjN@cluster0.s0axuzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{

        console.log("Connected.⏭️ ");
        
        
    })
}
module.exports = connectDB
