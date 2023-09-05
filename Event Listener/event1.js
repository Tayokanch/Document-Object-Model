/// Event Listeners /////
const bottonTwo = document.querySelector('.btn-2');
function alertbtn (){
    alert('I love JavaScript')
}

bottonTwo.addEventListener('click',alertbtn);

// Another Style of writing Function 
/* 
const bottonTwo = document.querySelector('.btn-2');
bottonTwo.addEventListener('click',  (e) => alert('I love JavaScript')
);
*/

const newBackgroundColor = document.querySelector('.container3')

function changeBgcolor(){
    newBackgroundColor.style.backgroundColor = 'blue'
    alert('I just my background just change to color Green')
}
newBackgroundColor.addEventListener('mouseover',changeBgcolor);
