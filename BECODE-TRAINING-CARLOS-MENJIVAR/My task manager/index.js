
console.log("Welcome to your task manager, Press");
console.log("1. to see all your tasks");
console.log("2. to add a task");
console.log("3. to delete a task");
console.log("4. to mark a task as done");
console.log("5. to Exit the task manager");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a number : ', (answer1) => {
    if(answer1 == 1){
        console.log(tasklist)
    }if(answer1 == 2){
        console.log(tasklist)
    }if(answer1 == 3){
        console.log(tasklist)
    }if(answer1 == 4){
        console.log(tasklist)
    }if(answer1 == 5){
        console.log(tasklist)
    }
        rl.close(); 
    });

function number1(){
    console.log("Welcome to your task manager, Press");
    console.log("1. to see all your tasks");
    console.log("2. to add a task");
    console.log("3. to delete a task");
    console.log("4. to mark a task as done");
    console.log("5. to Exit the task manager");
}

const tasklist = [1,2,3,4,5]




/*
var answer = window.prompt ("Please select an option:");
document.write("Here is your result" + answer + "")

if(answer === 1){
    console.log(print (let 1))
}else if(print(let 2)){
}else (print(let 5)){
    document.write("Please insert a task")
}

let 1 = "Here are all your tasks"
let 2 = "Add a task"
let 3 = "Delete a task"
let 4 = "Mark as done"
let 5 = "Exit"

*/

/*

/* const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q1 What option would you prefer? ', (answer) => {
      console.log(`Here is your result: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q2 What do you think of Node.js? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()


const alltask = () => {
    console.log("alltasks")
}

alltask

if(input === 1)

*/


/*

TESTING NEW TASK LIST by Carlos Menjivar

let addinfoButton = document.getElementById("addinfo");
let addtask = document.getElementById ("addtask");
let inputfield = document.getElementById ("inputfield");

addinfoButton.addEventListener('click', function()){
    var paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerText = inputfield.value;
    addtask.appendChild(paragraph);
    inputfield.vulie = "";
    paragraph.addEventListener('click',function( ){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick',function( ){
        addtask.removeChild(paragraph);
    })
}

*/