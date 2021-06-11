// lib and imports
const express = require("express");
const app = express();

const recipe = require("./controllers/recipe")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  // callback
  res.render('recipes.ejs');
});


// Create here your api setup
app.post('/api/recipes/add', (req, res) => {
  console.log("It is connected to the brain", req.body)
  recipe.addRecipe(req.body)
});

app.post('/api/recipes/get', (req, res) => {
  console.log("receiving from the Server", res to come)
  recipe.fetchRecipesFromDB(req.body)
});


// Server

app.listen(3000, () => console.log("Server Up and running"));
