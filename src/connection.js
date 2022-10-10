const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kws:Ad9f7TMnsE72oD6x@cluster0.ks0jbmm.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("No connection",e)
})