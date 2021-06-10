const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

const addTask = (data) => {
    let db = new sqlite3.Database('db/db.taskdatabase')
    db.run(`INSERT INTO tasks (Mytasks) VALUES (?)`, [data.data])

    console.log("Connected to Backend")
    db.close();
}

const getTask = (req, res) => {
    let sendData = { dataKey: [] };

    let db = new sqlite3.Database("db/db.taskdatabase", (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log("Connected to the tasks database.");
    });
    db.serialize(() => {
        db.each(SELECT * FROM tasks, (err, row) => {
            if (err) {
                console.error(err.message);
            }
            console.log(row.Mytasks);
            sendData.dataKey.push(row.Mytasks);
        });
        // res.send(sendData)
    });


    // PUT EXPORTS

    exports.addTask = addTask
    exports.getTask = getTask
/*
exports.deleteTask = deleteTask
exports.updateTask = updateTask
*/