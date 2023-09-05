//Variable

/* const accordion = document.getElementsByClassName('content-container')
for(i = 0; i < accordion.length; i++ ){
    accordion[i].addEventListener('click',function(e){
        e.target.classList.toggle('active');
        
        //if any of the accordion[i] is clicked and class of "active" is present with "content-container", remove it
        // if the class "active" isnt present with class "content-container" add it 
    })
}
 */

const accordion = document.getElementsByClassName('content-container');

// This is to toggle the active class
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (e) {
        // Toggle the 'active' class on the clicked element
        accordion[i].classList.toggle('active')
        // this.classList.toggle('active');


        // Loop through all accordion elements and hide/show content based on their 'active' class
        for (let j = 0; j < accordion.length; j++) {
            if (j !== i) {
                accordion[j].classList.remove('active');
                // You can add logic here to hide content as needed.
            }
        }

    });
}



/* 
The first loop sets up click event listeners for all "content-container" elements to toggle their "active" class when clicked.

The second loop is used inside the event listener to handle the behavior of closing other open accordion sections by removing the "active" class from them when one section is clicked to open. It ensures that only one section is open at any given time.

So, the first loop is for setting up the click behavior on each element, and the second loop is for managing the open/closed state of the accordion sections when one is clicked.



*/