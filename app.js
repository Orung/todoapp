//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');                                                                                              

//Event listeners

todoButton.addEventListener('click', addTodo); 
todoList.addEventListener('click', deleteChecked);



//functions

function addTodo(event){
    //prevent form submision
    event.preventDefault()
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    //check maark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">Complete</i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    // trash button

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash">trash</i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // append to list
    todoList.appendChild(todoDiv)

    //cleaar input Div
    todoInput.value = "";

}


function deleteChecked(e){
console.log(e.target);
const item = e.target;
if(item.classList[0] === 'trash-btn'){
   const todo =  item.parentElement;
   todo.classList.add("fall");
   todo.addEventListener("transitionend", function(){
    todo.remove();
   }) 
   
}

//CHECK MARK 
if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed')
    
}
}