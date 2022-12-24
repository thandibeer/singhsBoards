const mongoose = require("mongoose");

// 2. create schema
// perform validation while creating

const adminSchema = new mongoose.Schema({
    email: String,
    password: String
})

// 3. compile schema into model

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin