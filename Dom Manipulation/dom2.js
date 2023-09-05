//DOM MANIPULATION //
// HOW TO MANIPULATE CSS STYLE FROM THE DOM ////

const titlle = document.querySelector('#main-heading');

//Css styling
titlle.style.color = 'red';
console.log(titlle);

///HOW TO CREATE MORE lI ELEMENTS to the Ul ELEMENT
const ul = document.querySelector('ul')
//first query the ul
const li = document.createElement('li')
//create the new li
ul.append(li)
// append ul variable to li variable 

//How to modify the new li
li.innerText = 'Game of Throne'


// How to modify attribute  classes & Id
// Here i added a Id to the new li 
li.setAttribute('id','list-items')



// Here i added a Id to the new li 
li.classList.add('list-items')

// How to check if a particalar elements contains a className
console.log(li.classList.contains('list-items')); // displays true in the web console
//Note: classList is a keyword


//How to remove an element

/* li.remove(); */


// How to style elements that are more than one in the Dom with an inline css style
//What i did here was that i style all the li's by looping through them
liList = document.querySelectorAll('.list-items');
for(let i = 0; i < liList.length; i++){
    liList[i].style.fontSize = '3rem'
}
console.log(liList);


