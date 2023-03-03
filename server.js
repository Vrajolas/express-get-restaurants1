const express = require("express");
const app = express();
const {Restaurant} = require("./models/index")
const {sequelize} = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below: 
app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
})

app.get("/restaurants/:id", async (req, res) => {
    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findByPk(restaurantId);
    res.json(restaurant);
})

app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port " + port);
})