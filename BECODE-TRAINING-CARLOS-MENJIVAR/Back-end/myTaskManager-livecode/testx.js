const list = document.querySelector('#lista')

const addTaskBtn = document.querySelector('#btn-agregar');

const addToDB = (input) => {
    fetch('api/addToDB', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data)
        })
        .catch((error) => {
            console.error('Error: ', error)
        })
}

addTaskBtn.addEventListener('click', () => {
    //console.log(event)
    let task = document.getElementById('tareaInput').value
    console.log(task)
    addToDB({ data: task })
    let newTask = `<li><a class="check" href="#">${task}</a></li>`
    list.insertAdjacentHTML('beforeend', newTask)
    update()

})

//loadAllTasks()
const loadTasks = () => {
    fetch('api/loadTasks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            //newTask.innerHTML = ""
            addTasks(data)
            //console.log(data.data)

        })
        .catch((error) => {
            console.error('Error: ', error)
        })
}
loadTasks()
const addTasks = (add) => {
    list.innerHTML = ""
    add.data.forEach(el => {
        let listCard = `<li class="changeme"><a class="check" id="check" href="#">${el}</a></li>`
        list.insertAdjacentHTML('beforeend', listCard);
    });
    update()
}

//Update the task
//Update a task by marking the fact that its done.
//1. addEvent => click => done

const update = () => {
const tasks = document.querySelectorAll('.check')
console.log(tasks)
tasks.forEach((task) => {
    task.addEventListener('click', () => {
        console.log(task)
        alert('you clicked me! that tickles.')
        task.style.color = 'red';
        task.style.backgroundColor = 'green';
    })
})
}

//Delete a task if you don't want to see it anymore.
const delFromDB = (input) =>{
    fetch('api/delFromDB', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success: ', data)
        })
        .catch((error) => {
            console.error('Error: ', error)
        })
}



    const delBtn = document.querySelector('#btn-del');
    delBtn.addEventListener('click',()=>{
        /* let task = document.getElementById('tareaInput').value
        console.log(task)
        delFromDB({ data: task }) */
        update()
    })
delFromDB()
