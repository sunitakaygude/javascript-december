console.log("hello")

// Math

console.log(Math.floor(23.4)) 
console.log(Math.floor(-23.4))  
console.log(Math.ceil(23.4))  
console.log(Math.ceil(-23.4)) 
console.log(Math.round(2.4)) 
console.log(Math.round(2.5)) 

console.log(Math.random()) 
console.log(Math.random()*6)
console.log(Math.floor(Math.random()*6))
console.log(Math.floor(Math.random()*6)+1) 


// prompt function works in browser only
let randomNumber = Math.floor(Math.random()*6)+1
 console.log(randomNumber)
 let userInput = Prompt('Please guess the number') 
 if(randomNumber == userInput){
     console.log("Guess is correct")
}
 else {
     console.log("Guess is incorrect")
     }

// Ternary operatory
randomNumber == userInput ? console.log("Guess is correct"):console.log("Guess is incorrect")


// for loop 
 let randomNumber1 = Math.floor(Math.random()*6)+1 
 console.log(randomNumber1)
 for(let i = 1 ; i <= 5 ; i++){
    let userInput = Prompt('Please guess the number')
    if(userInput == randomNumber1){
         console.log('Guess is correct')
        break;
    }
    else {
         console.log("Guess is incorrect")
 }
}


// while loop
let randomNumber2 = Math.floor(Math.random()*6)+1 
console.log(randomNumber2)
let userInput2;
console.log(userInput2)
while(userInput2 != randomNumber2){
    userInput2 = prompt('Guess the number') 
    if(userInput2 == randomNumber2){
        console.log('Guess is correct')
        break
    }
    else {
        console.log('Guess is incorrect')
    }
}
