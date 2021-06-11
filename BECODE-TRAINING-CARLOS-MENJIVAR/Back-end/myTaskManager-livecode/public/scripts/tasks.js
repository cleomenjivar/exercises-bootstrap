// FRONT END FILE TO INTERACT WITH THE DOM

const addTaskBtn = document.getElementById('btn-agregar')
const listContainer = document.getElementById('lista')



const sendTaskToUpdateToMyServer = (task) => {
  fetch('api/tasks/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}





const addEventToAllTasks = (tasks) => {
  tasks.forEach((task) => {
    task.children[0].addEventListener('click', (event) => {
      // call my backend
      // alert(task.dataset.id)
      sendTaskToUpdateToMyServer({task_id: task.dataset.id, isDone: task.dataset.done})
      task.children[0].classList.toggle('done-1')
      if(task.dataset.done === "0"){
        task.dataset.done = "1"
      }else{
        task.dataset.done = "0"
      }
    })
  })
}

const sendTaskToDeleteToMyServer = (task) => {
  fetch('api/tasks/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}


const addEventToAllDeleteBtns = (tasks) => {
  tasks.forEach((task) => {
    task.children[1].addEventListener('click', (event) => {
      sendTaskToDeleteToMyServer({task_id: task.dataset.id})
      task.remove()
    })
  })
}

const selectAllTasks = () => {
  allTasks = document.querySelectorAll('#lista li')
  console.log(allTasks)
  addEventToAllTasks(allTasks)
  addEventToAllDeleteBtns(allTasks)
}

const sendTaskToServer = (task) => {
  fetch('api/tasks/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const fetchTasksFromDB = () => {
  fetch('api/tasks/all', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    data.tasks.forEach((task) => {
      listContainer.insertAdjacentHTML('beforeend', `<li data-id=${task.task_id} data-done=${task.done}><a class=${"done-" + task.done} href="#">${task.content}</a> <div class="deletebuton">X</div></li>` )
    })
    selectAllTasks()
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}







addTaskBtn.addEventListener('click', (event) => {
  let inputFromTheUser = document.getElementById('tareaInput')
  listContainer.insertAdjacentHTML('beforeend', `<li><a href="#">${inputFromTheUser.value}</a></li>`)
  sendTaskToServer({input: inputFromTheUser.value})
  inputFromTheUser.value = "";
})


fetchTasksFromDB()
