//How To Reveal an Hidden Event

const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {

    // This if statment says if the Variable hiddenContent has a class of "hidden-content" which is true,
    // This means that the "hidden-content" is hidden
    if (hiddenContent.classList.contains('hidden-content')) {
        hiddenContent.classList.remove('hidden-content'); //displays or Review CONTENT
    // then it says hiddenContent should remove the class "hidden-content" which means once the class is remove
    // the content would dislpay 
        revealBtn.textContent = 'Hide Content';
    /// then the variable revealBtn which is our botton should change it text to 'hide content'
    } 
     else {
        hiddenContent.classList.add('hidden-content'); // To Hide the Content again
        // Once the class 'hidden-content' is removed it displays the content 
        // so here we add the variable hiddenContent back to the class 'hidden-content' 
        // which would automatically hide the content again 
        revealBtn.textContent = 'Reveal Content';
        // change the button text to "Reveal Content"
    } 
}

revealBtn.addEventListener('click', revealContent);



/* BETTER EXPLANATION */
/* Sure! This code does the following:

1. It first finds two elements on a web page: one with the class "reveal-btn" and another with the class "hidden-content".

2. It defines a function called `revealContent()`.

3. When the button with the class "reveal-btn" is clicked, the `revealContent()` function is triggered.

4. Inside the `revealContent()` function, it checks if the element with the class "hidden-content" also has the class "hidden-content". If it does, it means the content is currently hidden.

5. If the content is hidden, it removes the "hidden-content" class from the content element, making it visible. It also changes the text on the button to say "Hide Content".

6. If the content is not hidden (meaning it's currently visible), it adds the "hidden-content" class to the content element, hiding it. It also changes the button text to say "Reveal Content".

So, this code essentially creates a button that toggles the visibility of a piece of content on a web page when clicked. If the content is hidden, clicking the button shows it, and if the content is visible, clicking the button hides it. */