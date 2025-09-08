let todoList =JSON.parse(localStorage.getItem('todoList')) || [];

addHTML();

function addHTML(){
    todoHtml = '';
    for(let i = 0;i<todoList.length;i++){
        const name = todoList[i].todo;
        const tododate = todoList[i].todoDate;
        const html = `
            <div class="todo-style">${name}</div><div class="todo-style">${tododate}</div><button onclick="
            todoList.splice(${i},1);
            saveToLocalStorage();
            addHTML();
        " class="later-css-button">Delete</button> `
        todoHtml+=html;
    }
    document.querySelector('.js-div').innerHTML=todoHtml;
}

function saveToLocalStorage(){
    localStorage.setItem('todoList',JSON.stringify(todoList));
}

function addToList(){
    const todo = document.querySelector('.js-input').value;
    const todoDate = document.querySelector('.js-input-date').value;
    todoList.push({todo,todoDate});
    console.log(todoList);
    saveToLocalStorage();
    document.querySelector('.js-input').value = '';
    addHTML();
}