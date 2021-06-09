const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

const getTask = (req, res) => {

}



const addTask = (data) => {
    let db = new sqlite3.Database('db/db.taskdatabase')
    db.run(`INSERT INTO tasks (Mytasks) VALUES (?)`, [data.data])

    console.log("Connected to Backend")
    db.close();
}


// PUT EXPORTS

exports.addTask = addTask
exports.getTask = getTask