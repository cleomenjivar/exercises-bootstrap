// FRONT END FILE TO INTERACT WITH THE DOM

const e = require("express");

let AddTaskBtn = document.querySelector('.boton');
let SearchArea = document.querySelector('#tareaInput');
let loadBtn = document.querySelector('#btn-agregar');
let list = document.querySelector('.lista');


const AddTask = (DataToSend) => {
    fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataToSend),
    })
        .then((response) => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error,:' error);
        });
}

// Get Data from DB

const getTask = (DataToLoad) => {
    fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then(data => {
            console.log('Success:', data);
            list.innerHTML = '';
            data.data.forEach(tarea => {
                list.innerHTML('beforeend', `<li><a href="#"> ${tarea} </a></li>`)
            })
        })
        .catch((error) => {
            console.error('Error,:' error);
        });
}


// Load Boton

AddTaskBtn.addEventListener('click', AddTaskBtn);

loadBtn.addEventListener('click', (e) => {
    alert('It Works!')
    getTask();
})

/*
const selectAllTasks = () => {
    allTasks = document.querySelectorAll('Lista li')
    console.log(allTasks)
}
*/


/*const getFrontDB =
    fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataToSend),

    })
console.log("Hello,")
}

AddTaskBtn.addEventListener('click', (event) => {
    console.log(SearchArea.value)
    let TaskName = document.querySelector('#tareaInput').value
    AddTask({ data: TaskName });
});



/*const { response } = require("express")

const saveBtn = document.getElementById('saveBtn')

saveBtn.addEventListener('clic, (event)' => {
    fetch('api/addtask', { method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: "DataToSend" })
})
    .then((response) => response.json())
    .then(data) => {
        console.log('Sucess', data);
    }
    console.err()
}
*/

/*Another way
const insertRow = (infos) => {
    let insertedRow = `<li><a href="#"> ${infos} </a></li > `;
    list.insertAdjacentHTML('beforeend', insertRow)
}
*/