/// VARIABLES

let openBtn = document.getElementById('open-btn') /// for button
let modalContainer = document.getElementById('modal-container') /// for container
let closeBtn = document.getElementById('close-btn') /// for the cross icon



//// EVENT LISTENERS

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})


///window.addEventListener('click', function(e)
// This part sets up an event listener that listens for clicks anywhere on the webpage.

window.addEventListener('click', function(e){
//this if statement checks if the thing that was clicked 
//(e.target) is the same as the modalContainer.
    if(e.target === modalContainer){
        modalContainer.style.display = 'none'
        //if clicked diplay it as none

        // In a general term is anywhere around the page is being 
        // clicked the, modalContainer will be disapper
    }
})
