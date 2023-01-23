console.log(Math.floor(34.5))
 console.log(Math.floor(-34.5))
 console.log(Math.ceil(-34.5))
 console.log(Math.ceil(34.5))
 console.log(Math.round(34.5))
 console.log(Math.round(34.4))


 console.log(Math.random())  
 console.log(Math.random()*6) 
 console.log(Math.floor(Math.random()*6)) 
 console.log(Math.floor(Math.random()*6)+1) 


// program 1
 let randomNumber1 = Math.floor(Math.random()*6)+1
 console.log(randomNumber1)
 let userInput1 = prompt('Enter any number between 1 to 6')
 if(userInput1 == randomNumber1){
     console.log("Guess is correct")
 }
 else {
     console.log("Guess is incorrect")
 }
randomNumber1 == userInput1 ? console.log("Guess is correct"):console.log("Guess is incorrect")

// for loop 


// program 2
 let randomNumber2 = Math.floor(Math.random()*6)+1  
 console.log(randomNumber2)
 for(let i = 1 ; i <= 5 ; i++){ 
     let userInput = prompt("please guess the number between 1 to 6")  
     if(userInput == randomNumber2){
         console.log('Guess is correct')
         break
     }
     else {
         console.log("Guess is incorrect")
     }
 }

// program 3

let randomNumber = Math.floor(Math.random()*6)+1  
console.log(randomNumber)
let userInput ;
console.log(userInput) 

 while(randomNumber != userInput){
     userInput = prompt('Enter the number 1 to 6') 
     if(userInput == randomNumber){
         console.log("Guess is correct")
     }
     else {
         console.log('Guess is incorrect')
     }
}


// program 
let q1 = 1
do {
    console.log("hello")
    q1 ++ 
}while(q1 <= 5)  