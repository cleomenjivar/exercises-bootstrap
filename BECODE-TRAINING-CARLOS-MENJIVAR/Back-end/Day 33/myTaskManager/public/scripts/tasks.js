// FRONT END FILE TO INTERACT WITH THE DOM

const e = require("express");

let AddTaskBtn = document.querySelector('.boton');
let SearchArea = document.querySelector('#tareaInput');
let list = document.querySelector('.lista');
let loadBtn = document.queryCommandValue('');

const AddTask = (DataToSend) => {
    fetch('/api/addTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(DataToSend),

    })
    console.log("Hello,")
}

// Load Boton

loadBtn.addEventListener('click', (e) => {
    alert('It Works!')
    getFromDB();
}


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

