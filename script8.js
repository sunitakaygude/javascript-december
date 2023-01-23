// for loop

// program - print hello 5 tyms
for (let i = 0; i <= 4; i++) { 
    console.log("hello")
}

// print 1 to 5
for(let i = 1 ; i <= 5 ; i++){  
    console.log(i)  
}
// print 5 to 1
for(let i = 5 ; i >= 1 ; i--){ 
    console.log(i) 
}

// table of two
for(let i = 2 ; i <= 20 ; i = i + 2){
        console.log(i)
}
// table of three
for(let i = 3 ; i <= 30 ; i = i + 3){
    console.log(i)
}
// 10 to 1
for(let i = 10 ; i >= 1 ;i--){
    console.log(i)
}

// break  -- immediately stops the loop
for(let i = 0 ; i <= 5 ; i++){ 
    if(i == 2){
        break
    }
    console.log(i) 
}


for(let i = 5 ; i <= 10 ; i++){
    if(i == 7){
        break
    }
    console.log(i) 
}

for(let i = 1 ; i <=5 ; i++){ 
    console.log(i) 
    if(i == 3){
        break
    }
}

for(let i = 10 ; i >= 5 ; i--){
    if(i == 8){
        break
    }
    console.log(i) 
}

// continue -- immediately continue loop to next iteration


for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}