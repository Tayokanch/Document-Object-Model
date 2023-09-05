/* Parent Node Traversal */ 


/// How to determine the parent of an element
// In this case we want to determine the parent of ul node
 
// first we need to grab ul from the document by giving it a variable name 
const ulNode = document.querySelector('ul');
console.log(ulNode);

/// To determine the parent
console.log(ulNode.parentNode)// Container
/// OR ///////
console.log(ulNode.parentElement) //Container

// To determine the groundparent
console.log(ulNode.parentNode.parentNode)// Body

/// OR ///////
console.log(ulNode.parentElement.parentElement)// Body
//////////////////////////////////////////////////////////////////


/* Child Node Traversal */ 
/// How to determine the Child of an element
// In this case we want to determine the Child of ul node

const childUl = document.querySelector('ul')
/// childUl is a variable created to store ul element
console.log(childUl.childNodes);

//How to select the first child of the node
console.log(childUl.firstChild);
// styling the first child of ul node
childUl.childNodes[1].style.backgroundColor = 'pink'


//How to select the last child of the node
console.log(childUl.lastChild);

// How to determine the siblings of a node ///
// The siblings of a node are the element who are both in the same container
// Example is the h1 & ul who are both inside the div container

const ulSibling = document.querySelector('ul')
console.log(ulSibling.previousElementSibling) // output: h1

console.log(ulSibling.nextElementSibling)// output:null because there no other element after the ul 


