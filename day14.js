let names =
["chinmay","sarika","ram","poorva","satish"]

let numbers =
[22,33,44,55,66,77,88,99,10]
let info =
["chinmay","deshpande",7709192441,true]

console.log(names[0])
console.log(names[1])
console.log(info)

// // ----------Looing to print element of array

let cities =
["pune","mumbai","nagpur","wardha"]
console.log(cities[0])

for(let i = 0 ; i<=3 ; i++){
    console.log(i)
    console.log(cities[i])
}

//javascript object
//Array -object
// object property and Method

//property length

let country =
["India","pakisthan","srilanka","Bangladesh"]
console.log(country.length)
console.log(country.length-1)

for(let i = 0 ; i< country.length ; i++){
console.log(i)
console.log(country[i])
}

//methods
//Action
//Return type

//push()
//action - adds the element the last
//return -new length of array

let vegetables =
["cabbage","brinjal","cauliflower","tomato"]
console.log(vegetables)

let q1 =
vegetables.push("ladyfinger")
console.log(q1)
console.log(vegetables)

//unshift()
//action -- add the element at start of array
//return- new length of array

let q2 =
vegetables.unshift('carrot')
console.log(q2)
console.log(vegetables)

//pop()
//action -- remove the last element
//return - returns the same

let fruits = 
["apple","mango","banana","grapes"]
console.log(fruits)
let q3 = fruits.pop()
console.log(fruits)
console.log(q3)

//shift()
//action --remove the first element
//return- first element

let q4 = fruits.shift()
console.log(q4)
console.log(fruits)

//4 method
//push()- new length
//unshift()- new length
//pop()-returns last element
//shift()-returns the first element

//includes()
//action-search for element
//return -boolean value

let animals =
["tiger","lion","panthar","rabbit"]
let q5 = animals.includes("Tiger")
let q6 = animals.includes("tiger")
console.log(q6)

//reverse()
let q7 = animals.reverse()
console.log(q7)

//indexOf()
let numberss = 
[555,666,777,8888,9999,8888]
console.log(numberss)
let q8 = numberss.indexOf(666)
let q9 = numberss.indexOf(10000)
console.log(q8)
console.log(q9)

//join()
let infoB =
["chinmay","deshpande",7709192441]
let q10 =infoB.join('')
console.log(q10)
console.log(typeof q10)

//program 1

let birthYear = [1989,1990,1991,1992]
let ages = []  


for(let i = 0 ; i < birthYear.length ; i++){
    console.log(i)
    console.log(birthYear[i])
    console.log(2023 - birthYear[i])
    let age = 2023 - birthYear[i] 
    ages.push(age)

}
console.log(ages)

// program 2

let age  = [11,22,33,44,22,33,44,55,66,77]
let above40 = [] 
let below40 = []

for(let i = 0 ; i < age.length ; i++){
    console.log(i)
    console.log(age[i])
    if(age[i] > 40){
        above40.push(age[i]) 
    }
    else {
        below40.push(age[i])
    }
}
console.log(above40)
console.log(below40)

// program3 

let addition = [11,22,33] 
let total = 0

for(let i = 0 ; i < addition .length ; i++){
     console.log(i)
     console.log(addition[i])
    total = total + addition[i]
    
}
console.log(total)

// program 4

let namesA = ["chinmay","sarika","sameer","satish","sanket"]

for(let i = 0 ; i < namesA.length ; i++){
    console.log(i)
     console.log(namesA[i])
    console.log("welcome "+ namesA[i])
}

