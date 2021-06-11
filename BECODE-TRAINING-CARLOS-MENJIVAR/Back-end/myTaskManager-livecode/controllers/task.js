const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

const addTaskToDB = (taskFromTheBrain) =>{
  // code to add to the database
  // console.log("From the server I present:", taskFromTheBrain)
    let db = new sqlite3.Database('./db/db.mytaskmanager');

    // insert one row into the langs table
    db.run(`INSERT INTO task(content) VALUES(?)`, [taskFromTheBrain.input], function(err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });

    // close the database connection
    db.close();
}


const fetchAllTasksFromDb = (res) => {
  let dataForTheUser = {tasks: []}
  let db = new sqlite3.Database('./db/db.mytaskmanager');

  let sql = `SELECT * FROM task`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
      dataForTheUser.tasks.push(row)
    });
    console.log(dataForTheUser)
    res.send(dataForTheUser)
  });

  // close the database connection
  db.close();
}

const updateTaskOnDB = (taskId) => {
  let done
  if(taskId.isDone === "0"){
    done = 1
  }else{
    done = 0
  }
  console.log("i will update the task with the id", taskId.task_id)
  let db = new sqlite3.Database('./db/db.mytaskmanager');


  db.run(`UPDATE task SET done = ? WHERE task_id = ?`, [done, taskId.task_id], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) updated: ${this.changes}`);

  });

  // close the database connection
  db.close();
}


const deleteTaskFromDB = (taskId) => {
  console.log("im ready to delete the task with the id ", taskId.task_id )
  let db = new sqlite3.Database('./db/db.mytaskmanager', (err) => {
    if (err) {
      console.error(err.message);
    }
  });

  let id = taskId.task_id;
  // delete a row based on id
  db.run(`DELETE FROM task WHERE task_id=?`, id, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row(s) deleted ${this.changes}`);
  });

  // close the database connection
  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
  });
}


exports.addTaskToDB = addTaskToDB;
exports.fetchAllTasksFromDb = fetchAllTasksFromDb;
exports.updateTaskOnDB = updateTaskOnDB;
exports.deleteTaskFromDB = deleteTaskFromDB;

