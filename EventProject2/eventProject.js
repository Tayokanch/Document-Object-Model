//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

const quotes = [{
    quote: `"The best way to find yourself if to lose yourself in the service of otheres"`,
    person: `Mahatma Gandhi`
    }, 
    
    {  quote:`"If you want to live a happy life, tie it to a goal, not to people or things"`,
       person: `Albert Einstein`

    },

    {  quote:`"At his best, man is the noblest of all animals; sepersted frol low and justice he is the worst"`,
        person: `Aristotle`
    },

    {  quote:`"Your time is limited, so dont waste it livibg someone else's life."`,
        person: `Steve Jobs`
    },

    {  quote:`"If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles."`,
        person: `Wayne Dyer`
    },

    {  quote:`"I didn't get there by wishing for it or hoping for it, but by working for it."`,
        person: `Estée Lauder`
    },
    
    {  quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
    person: `Winston Churchill`
    },

    {  quote:`"It's not just about being better. It's about being different. You need to give people a reason to choose your business."`,
        person: `Tom Abbott`
    },
];

btn.addEventListener("click", function(){

    // The reason we placed the math.random method inside the Math.floor method is that
    // Math.random method only displays random number with decimals number(floating numbers)
    // so the math.floor method would round up any random numbers gotten from math.random to a whole number

    ///The reason for this code is that we want want we have inside the array should be diplayed randomly once its clicked
    let random = Math.floor(Math.random()* quotes.length);

    // here we change the inner text of our variable qoute
    // and assigned it to the array quotes, followed by an angle bracket with variable random(which is a method) inside it
    // followed by .quote, this .quote is the quote inside the quotes array
    // which implies that choose the quote inside the array randomly 
    quote.innerText = quotes[random].quote;
    
    person.innerText = quotes[random].person;
    // here we change the person inner text of our variable qoute
    // and assigned it to the array quotes, followed by an angle bracket with variable random (which is a method) inside it
    // followed by .person, this .person is the person inside the quotes array
    // which implies that choose the person inside the array randomly 

})

