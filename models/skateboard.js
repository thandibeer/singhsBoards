const mongoose = require("mongoose");

// 2. create schema
// perform validation while creating

const skateboardsSchema = new mongoose.Schema({
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

const Skateboard = mongoose.model("Skateboard", skateboardsSchema);

module.exports = Skateboard