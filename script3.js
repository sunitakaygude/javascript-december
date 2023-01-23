

let x1 = 10
 console.log(x1)
 x1 = 400
 console.log(x1)

 const h = 100
 console.log(h)
 

 let a  = 10 
 let b =  5 

 console.log(a+b)
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(a%b)

 let s = 100
 let t = 78

console.log(s+t)
 console.log(s-t)
 console.log(s*t)
 console.log(s/t)
 console.log(s%t)

// // // DRY -- donot repeat yourself 

 function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
 }
 Calculator(12,4)
 Calculator(120,40)


// // // function without parameter and without return type 

 function addA(){
     console.log(8+0)
 }
 addA()
addA()
 addA()
 addA()

// // // function with parameter and withoutreturn 

 function addB(x,y){
     console.log(x+y)
 }
 addB(12,3)
 addB(23,5)

// // // function with parameter and with return type

 function addC(x,y){
         return x + y
 }

 let q1 = addC(23,4)
 console.log(q1) 
console.log(q1 + q1) 
 console.log(q1 + q1 + q1) 
 console.log(q1 * 0.10) 


// // 100 show 
// // 100 Given 

// // 100 -- 10 % ---- 90 (discount)
// // payment  - 100


// Types 

//| Introvert | Extrovert

// calm       | loud

// speaks less | speaks more

// less outing  | speaks more


// Human 
// Property -- age height weight color gender
// Method - talk() , walk()

// Vehicle
// Property - color , model ,type , color 
// Method - start() , stop()


// Bank - ICICI bank
// Propery - bal, accNo ,accName , IFSCcode, accType
// Method - deposit() , withdrawl()



let x = 10
console.log(x) 
console.log(typeof x)


let y = true
console.log(y)
console.log(typeof y) 


let firstName = "chinmay"
console.log(firstName)
console.log(typeof firstName)  


// comparison 

// < , > , <= , >= , != , == , === ,!==
console.log(typeof 10) 
console.log(typeof '10')

// === , !==    (value and type)
// == , !=   (value)
// entity < entity ====> boolean ===> true and false

console.log(77 > 4)
console.log(77 < 88)
console.log(66 >= 34)
console.log(34 <= 33)
console.log(34 >= 33)
console.log(34 >= 34)
console.log(35 <= 35)
console.log(7 == 7)
console.log(7 != 6)
console.log(7 != 7)

console.log(7 == '7')
console.log(7 != '7')
console.log(7 != '6')

console.log(7 === '7')
console.log(7 !== '7')
console.log(7 === 7)
console.log(7 !== 7)