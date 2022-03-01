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


let Rest = ["CheesecakeFactory" , "TexasRoadhouse" , "PFChangs" , "OliveGarden"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice 
}

function restGen(){
    let userIsHappy = false

    while(userIsHappy === false){
    let randomRest = randomGenerator(Rest)
    let userResponse = prompt(`Your random restuarant is ${randomRest}. Is this ok?`)
    if(userResponse.toLowerCase() === 'yes'){
        alert (`Enjoy eating at ${randomRest}`)
        userIsHappy = true
}else if (userResponse.toLowerCase() === 'no'){
        userIsHappy = false}
    }
}

restGen()


let Trans = ["Bus" , "Moped" , "Car" , "Bikes"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice 
}

function transGen(){
    let userIsHappy = false

    while(userIsHappy === false){
    let randomTrans = randomGenerator(Trans)
    let userResponse = prompt(`Your random choice of transportation is ${randomTrans}. Is this ok?`)
    if(userResponse.toLowerCase() === 'yes'){
        alert (`Have fun catching a ride on your ${randomTrans}`)
        userIsHappy = true
}else if (userResponse.toLowerCase() === 'no'){
        userIsHappy = false}
    }
}

transGen()



let Activity = ["Movies" , "Club" , "Themepark" , "SportEvent"];

function randomGenerator(myArray){
    let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
    return randomChoice 
}

function activityGen(){
    let userIsHappy = false

    while(userIsHappy === false){
    let randomActivity = randomGenerator(Activity)
    let userResponse = prompt(`Your random choice of entertainment is ${randomActivity}. Is this ok?`)
    if(userResponse.toLowerCase() === 'yes'){
        alert (`Go and enjoy yourself at the ${randomActivity}`)
        userIsHappy = true
}else if (userResponse.toLowerCase() === 'no'){
        userIsHappy = false}
    }
}

activityGen()

let userIsHappy = false

    while(userIsHappy === false){

let userResponse = prompt("Are you satisfied with your random Trip?")
if(userResponse.toLowerCase() === 'yes'){
    alert ("Enjoy your trip!")
    userIsHappy = true
}else if (userResponse.toLowerCase() === 'no'){
    alert ("Im sorry please refresh page to re-select")
    userIsHappy = false}
    }



  