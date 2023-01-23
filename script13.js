let x = 10 
console.log(x)
console.log(typeof x)


let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)

let canDrive = true
console.log(canDrive)
console.log(typeof canDrive)


let names = ["chinmay","poorva","mayuri","amol","ram"]
console.log(names)
console.log(names[0])
console.log(names[1])
console.log(names[3])

let cities = ["pune","mumbai","nagpur","wardha","amarvati"]
console.log(cities[4])
console.log(cities[1])


for(let i = 0 ; i <= 4 ; i++){ 
   console.log(i)  
    console.log(cities[i])
    
}

let country = ["india","srilanka","pakistan","bangladesh"]
for(let i = 0  ; i <= 3 ; i++){
    console.log(i)
    console.log(country[i])
}

let i1 = 0
while(i1 <= 3){
    console.log(country[i1])
    i1 ++
}

// Object - Human
// Property  - age , color ,gender , height
// Method - talk() , walk()


// Object - Vehicle
// Property - model , type , color
// Method - start() , stop()

// Object - Bank account
// Property = accNo , accHolder ,type
// Method - withdrawl() , deposit()


// Gym()
// action -- excercise
// return --- health

// Sleep()
// action -  go to bed and close eye
// return rest


let fruits = ["apple","mango","banana","grapes"]
let q1 = fruits.length
console.log(q1)

// methods
// push()
// action - adds the element at last 
// return  - new length of array

let q2 = fruits.push("papaya")
console.log(fruits)
console.log(q2) 


// unshift()
// action - add the element at start
// return new length of array
let q3 = fruits.unshift("berry")
console.log(fruits)
console.log(q3) 