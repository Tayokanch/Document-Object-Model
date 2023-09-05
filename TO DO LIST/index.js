
// Get references to the necessary elements
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');
const erazer = document.getElementById('erazer');

// Eventlistener for add button
addTask.addEventListener('click', function () {
    if (inputTask.value === "") {
        alert("Please Enter a Task");
        return; // Exit the function if input is empty
    }

    // Create a new div for the task
    const task = document.createElement('div');
    task.classList.add('task');

    // Create a li element to display the task text
    const li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    // Create a check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete');
    task.appendChild(deleteButton);

    // Eventlistener for checkButton
    let recheck = "check";
    checkButton.addEventListener('click', function () {
        if (recheck === "check") {
            // every text inside the parent container of checkButton will be line-through
            checkButton.parentElement.style.textDecoration = "line-through";
            recheck = "uncheck";
        } else {
            checkButton.parentElement.style.textDecoration = "none";
            recheck = "check";
        }

    });



  /*    // Eventlistener for Erazer
        erazer.addEventListener('click', function () {
            task.parentElement.parentElement.remove();
        });  */

       deleteButton.addEventListener('click', function () {
        deleteButton.parentElement.remove(); // task div
    });   


    //OR

  /*   deleteButton.addEventListener('click', function (e) {
        e.target.parentElement.parentElement.remove(); // task div
    }); */ 

   
    // Append the task to the taskContainer
    taskContainer.appendChild(task);

    // Clear the input
    inputTask.value = "";
});


///I haven't added the erase button function

