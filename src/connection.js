const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://gcex:stablecoin@cluster0.n9hs6tn.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successfull");
}).catch((e)=>{
    console.log("No connection",e)
})