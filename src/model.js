const mongoose = require("mongoose");

const ClosePrice = new mongoose.Schema({
  GCStoUSDT : {
        type:Number,
        required:true
    },
});

const ClosePriceModel = new mongoose.model("GCSPRICE", ClosePrice)
module.exports = ClosePriceModel