const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/GCScloseprice",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("No connection",e)
})