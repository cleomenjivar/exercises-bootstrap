// lib and imports
const express = require("express");
const app = express();

const task = require("./controllers/task")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
  res.render('tasks.ejs');
});


// Create here your api setup

app.post('/api/addTask', (req, res) => {
  console.log("heloooo brain", req.body)
  task.addTask(req.body);
  console.log("reponse Backend", res.body)
})

//

app.post('/api/addtask', task.getTask)


// Server
app.listen(3000, () => console.log("Server Up and running"));



/*
app.post('/', (req, res) => {
  //console.log('Hello world')
  task.addTask(req.body, res)
  console.log("Hello from the brain");
})
*/