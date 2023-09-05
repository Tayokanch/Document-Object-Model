// Event Delegation ///

// It allows users to append a SINGLE event listener 
// to a parent element that adds it to all of its present
// AND future descendents that match a selector 

document.querySelector('#sport').addEventListener
('click', function(e){
    //this function is an anonymous function which has no function name
    console.log(e.target.getAttribute('id')+ " is clicked")
    // the e.target here is a keyword which helps you know which thing you clicked by saying "thing's ID is clicked." 

    //here we are changing the background color when li are clicked
    //  by assigning variable target to e.target
    // followed by an if statement
    
    const targett = e.target;

    // if variable targett has an li then, change the background color to grey
     if(targett.matches('li')){
        targett.style.backgroundColor = 'lightgrey'
    } 
})

///// Adding another item to the li
const sport = document.querySelector('#sport');
const newSport = document.createElement('li');
sport.appendChild(newSport);
newSport.innerText ='Rugby'