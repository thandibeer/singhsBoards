const mongoose = require("mongoose");

// 2. create schema
// perform validation while creating

const productsSchema = new mongoose.Schema({
    name: String,
    color: String,
    price: Number,
    type: String,
    sizes: Array,
    images:Array,
    brand:String,
    description:String
})

// 3. compile schema into model

const Product = mongoose.model("Product", productsSchema);

module.exports = Product