// lib and imports
const express = require("express");
const app = express();
const test = require("./controllers/test")
const movie = require("./controllers/movies")

// app setup
app.use(express.json())

app.use("/static", express.static("public"))
app.set("view engine", "ejs");


// pages and api
app.get('/',(req, res) => {
  res.render('movies.ejs');
});

app.post('/api/addtest', (req, res) => {
   test.addTest(req.body)
})
app.post('/api/test', test.testdb)

//Add event or action

app.listen(3000, () => console.log("Server Up and running"));
