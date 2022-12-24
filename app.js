const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");


const Product = require("./models/products")
const Admin = require("./models/admin");
const Skateboard = require("./models/skateboard");
const Footwear = require("./models/footwear");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.static("public"))


app.listen(5000, () => {
    console.log(`the server is up and running at port 5000`);
})

const url = "mongodb://localhost:27017/skateboardsDB";

app.get("/api",async (req,res)=>{
    try{
        let allProducts=[]
        let boards=[]
        let footwears=[]
        await mongoose.connect(url);
        console.log("connected");

        Skateboard.find((err,products)=>{
            if(err) console.log("ERROR: ",err)
            else{
                boards = products
                Footwear.find((err,products2)=>{
                    if(err) console.log("ERROR: ",err)
                    else{
                        footwears = products2
                        allProducts = [...boards,...footwears]
                        res.send(JSON.stringify(allProducts))
                        mongoose.connection.close()
                    }
                })
            }
        })
    }
    catch(err){
        console.log("ERROR: "+err);
    }
})

app.get("/login/admin", async (req, res) => {
    try {
        await mongoose.connect(url);
        console.log("connected");
        Admin.find((err, admin) => {
            if (err) console.log("ERROR: ", err)
            else {
                res.send(admin)
                mongoose.connection.close()
            }
        })
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
})

app.post("/add", async (req, res) => {
    try {
        const { name, color, price, type, brand, sizes, description } = req.body;
        if (type === 'board_complete') {
            const images = ["blind2.jpg"];
            const board = new Skateboard({
                name, color, price, type, sizes, images, brand, description
            })
            await mongoose.connect(url);
            console.log("connected");
            board.save((err) => {
                if (err)
                    res.send("ERROR: ", err)
                else
                    console.log("Document added successfully")
                // res.redirect('/add')
                res.send(board);
                mongoose.connection.close();
            })
        }
        else if(type==='shoes'){
            const images = ["sh1_1.jpg,sh1_2.jpg"];
            const shoe = new Footwear({
                name, color, price, type, sizes, images, brand, description
            })
            await mongoose.connect(url);
            console.log("connected");
            shoe.save((err) => {
                if (err)
                    res.send("ERROR: ", err)
                else
                    console.log("Document added successfully")
                // res.redirect('/add')
                res.send(shoe);
                mongoose.connection.close();
            })
        }
        else{
            const images = ["sh1_1.jpg,sh1_2.jpg"];
            const product = new Product({
                    name,color,price,type,sizes,images,brand,description
                })
                await mongoose.connect(url);
                console.log("connected");
                product.save((err) => {
                    if (err)
                        res.send("ERROR: ", err)
                    else
                        console.log("Document added successfully")
                        // res.redirect('/add')
                        res.send(product);
                        mongoose.connection.close();
                })
        }
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
})

app.post("/edit/:id", async (req, res) => {
    // console.log(req.params.id);
    try {
        const { name, color, price, type, brand, sizes, images,description } = req.body;

        let _id = req.params.id;

        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("connected");

        if(type ==='board_complete'){
            Skateboard.findByIdAndUpdate(
                { _id: _id }, { name, color, price, type, sizes, images, brand, description },
                (err, doc) => {
                    if (err) res.send("ERROR: ", err)
                    else if (doc == null) res.send("No matching document could be found.")
                    else {
                        res.send(doc);
                    }
                    mongoose.connection.close()
                }
            )
        }
        else if(type === 'shoes'){
            Footwear.findByIdAndUpdate(
                { _id: _id }, { name, color, price, type, sizes, images, brand, description },
                (err, doc) => {
                    if (err) res.send("ERROR: ", err)
                    else if (doc == null) res.send("No matching document could be found.")
                    else {
                        res.send(doc);
                    }
                    mongoose.connection.close()
                }
            )
        }
        else{
            Product.findByIdAndUpdate(
                { _id: _id }, { name, color, price, type, sizes, images, brand, description },
                (err, doc) => {
                    if (err) res.send("ERROR: ", err)
                    else if (doc == null) res.send("No matching document could be found.")
                    else {
                        res.send(doc);
                    }
                    mongoose.connection.close()
                }
            )
        }
        
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
})

app.delete("/delete/:id", async (req, res) => {
    try {
        let _id = req.params.id;

        _id = mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("connected");

        await Skateboard.findByIdAndDelete({ _id: _id }, (err, doc) => {
            if (err) res.send("ERROR: ", err)
            else if (doc == null){
                // res.send("No matching document could be found.")
                Footwear.findByIdAndDelete({ _id: _id }, (err, doc) => {
                    if (err) res.send(`Error: ${err}`)
                    else if (doc == null){
                        res.send("No matching document could be found.")
                    } 
                    else {
                        // res.redirect('/edit')
                        res.send(doc)
                    }
                    mongoose.connection.close()
                })
            } 
            else {
                // res.redirect('/edit')
                res.send(doc)
            }
            mongoose.connection.close()
        })
    }
    catch (err) {
        console.log("ERROR: " + err);
    }
})
