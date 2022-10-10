const express = require("express");
const app = express();
const ClosePriceModel = require("./model");
const cors = require("cors");
require("./connection")

const port = 3003;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello from server")
})

app.get("/kws/v4/closeprice", async(req, res)=>{
    try {
        const data = await ClosePriceModel.find();
        res.send(data);
    } catch (error) {
        res.send(error);
    }
});


app.put("/kws/v4/closeprice/:id",(req,res)=>{
    const _id = req.params.id
    ClosePriceModel.findByIdAndUpdate(_id,req.body).then(()=>{
      res.status(200).send("Updated Price")
    }).catch((e)=>{
      res.status(404).send(e)
    })
})

app.listen(port, ()=>{
    console.log(`Connection is listen at ${port}`)
})
