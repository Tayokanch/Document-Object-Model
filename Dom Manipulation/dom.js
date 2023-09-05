/* THESE ARE THE 5 METHODS TO SELECT ELEMENTS IN THE DOM */
 
 // Note: HOW to select Element from  the Dom using the VS code
 // 1. You need to enter the load the webpage and go to the inspect element
 // 2. Go back to your VS Code\ code editor and write your query
 // 3. When you write console.log, dont press enter, just save the code by pressing command + s 
 // the query would automatically show in the console of your inspect elemt


 
//GetElementById()
const title = document.getElementById('main-heading')
console.log(title);

// getElementByClassName()
// This method queries out all the element with the same class name 

    const listItem = document.getElementsByClassName('list-items')
    console.log(listItem);

// getElementByTagName()
// This method queries out all the element with the same tag name 
const listItems = document.getElementsByTagName('li')
console.log(listItems);

//querySelector()
//How this works is that if we have an elements, id, 0r class with same name e.g 2 divs, this method queries the first  of them which is the first div
// To query class and Id we need to add the .(dot) for class followed by the className and # for id followed by the idName
const container = document.querySelector('.container')
console.log(container);

//querySelectorAll()
//How this works is that if we have an elements with the same names e.g 4 li's tag, this method queries out all the tags with that name 

const list = document.querySelectorAll('li')
console.log(list);