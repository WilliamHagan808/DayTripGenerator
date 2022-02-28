"use script";
//console.log("Code")

let Place = ["Seattle" , "NewYork" , "Miami" , "SanDiego"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice 
}

function placeGen(){
    let userIsHappy = false

    while(userIsHappy === false){
    let randomPlace = randomGenerator(Place)
    let userResponse = prompt(`Your random location is ${randomPlace}. Is this ok?`)
    if(userResponse.toLowerCase() === 'yes'){
        alert (`Have fun at ${randomPlace}`)
        userIsHappy = true
}else if (userResponse.toLowerCase() === 'no'){
        userIsHappy = false}
    }
}

placeGen()