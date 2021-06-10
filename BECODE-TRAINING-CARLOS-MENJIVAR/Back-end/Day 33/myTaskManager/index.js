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


// create here your api setup

app.post('/api/addTask', (req, res) => {
  //console.log("Contacting the Brain", req.body)
  task.addTask(req.body);
  //econsole.log("Responde Backend", res.body)
})

// get tasks to load (api)

app.post('/api/addtask', task.getTask);



// server
app.listen(3000, () => console.log("Server Up and running"));



/* Guide
app.post('/', (req, res) => {
  //console.log('Hello world')
  task.addTask(req.body, res)
  console.log("Hello from the brain");
})
*/