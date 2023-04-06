const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const foodModel = require("./models/Foods");
const cartModel = require("./models/Cart");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://dvolobueva:D92wDCzB7g7sUoKh@final-proj.q5em3zd.mongodb.net/groceries?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

app.get("/read", async (req, res) => {
    try{
        res.send(await foodModel.find({category: "Vegetable"}).limit(4));
    } catch(e){
        res.send(e);
    };
});

app.get("/all", async (req, res) => {
    try{
        res.send(await foodModel.find().sort({discount: -1}));
    } catch(e){
        res.send(e);
    };
});

app.post("/insert", async (req, res) => {
    const products = req.body.productArray;
    const userData = req.body.personalData;

    const insert = new cartModel({products: products, personalData: userData});

    try{
        await insert.save();
    } catch(e){
        console.log(e);
    }
});

app.get("/insert", async (req, res) => {
    try{
        res.send(await cartModel.find());
    } catch(e){
        res.send(e);
    };
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});