// lib and imports
const express = require("express");
const app = express();

const taskController = require("./controllers/task")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/',(req, res) => {
  // callback
  res.render('tasks.ejs');
});

app.post('/api/tasks/add', (req,res) => {
  console.log('from the brain i prent:', req.body)
  taskController.addTaskToDB(req.body)
})


app.post('/api/tasks/all', (req, res) => {
  taskController.fetchAllTasksFromDb(res)
})


app.post('/api/tasks/update', (req, res) => {
  console.log(req.body)
  taskController.updateTaskOnDB(req.body)
})
// Create here your api setup

app.post('/api/tasks/delete', (req, res) => {
  taskController.deleteTaskFromDB(req.body)
})


app.listen(8080, () => console.log("Server Up and running"));
