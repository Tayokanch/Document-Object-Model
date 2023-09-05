let taskContainer = document.getElementById('task-container');
let task = document.getElementById('task');
let deleteTask = document.getElementById('delete-task')
let checkTask = document.getElementById('check-task')


 deleteTask.addEventListener('click', function(){
    deleteTask.nextElementSibling.style.fontSize= "5rem";
    deleteTask.parentElement.style.backgroundColor = "blue"

})  

