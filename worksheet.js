let dayOfWeek = 'Monday'

console.log(dayOfWeek)

dayOfWeek = 'Friday'

console.log(`I can\'t wait for ${dayOfWeek}!`)

let animalInput = prompt('What is your favorite animal?')

let colorInput = prompt('What is your favorite color?')

alert(`I've never seen a ${colorInput} ${animalInput}!`)

//Favorite breakfast: Breakfast Burrito
//Favorite Lunch: Chicken Sandwich
//Favorite Dinner: Pan seared chicken breast with steamed veggies.

let timeOfDay = '1800'
let currentMeal = ''

if(timeOfDay<1200){
    currentMeal  = 'Breakfast Burrito'
} else if(timeOfDay>=1200 && timeOfDay<=1700){
    currentMeal = 'Chicken Sandwich'
} else if(timeOfDay>1700){
    currentMeal = 'Pan Seared Chicken and Steamed Veggies'
}
console.log(currentMeal)

//W3 schools says there are no integers in JS. This is a number without a decimal. 

let randInt = Math.floor(Math.random()*10)

if(randInt<2 && randInt>0){
    console.log('\"Beatles\"')
}
else if(randInt>3 && randInt<5){
    console.log('\"Stones\"')
}
else if(randInt>6 && randInt<8){
    console.log('\"Floyd\"')
}
else if(randInt==9 || randInt==10){
    console.log('\"Hendrix\"')
}
else {
    console.log('\"Neil Young\"')
}

for(let i=0; i != 7; i++){
    console.log('Javascript is cool!')
}

for(let number = 0; number != 11; number++){
    console.log(number)
}

for(let greeting = 0; greeting !=5; greeting++){
    console.log('hello')
    console.log('goodbye')
}

function printMovieName(){
    let myFavoriteMovie = 'Demon Slayer: Kimetsu no Yaiba'
    console.log(myFavoriteMovie)
}

printMovieName()

function usersBandPrompt(){
    let inputBand = prompt('Please enter your favorite band\'s name.')
    return inputBand
}

let usersChosenBand = usersBandPrompt()
console.log(usersChosenBand)

function concertDisplay(musicalAct){
    let myStreet = prompt('Enter the street you live on.')
    console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
}

concertDisplay(usersChosenBand)

let desktopItems = ['Humidifier', 'Inhaler', 'PS4 Controller']
console.log(desktopItems[1])

desktopItems.push('Infinity Gauntlet')

for(let i = 0; i < desktopItems.length; i++){
    console.log(desktopItems[i])
}

let magicNumber = Math.floor(Math.random()*100)
let guess = 0

while(guess != magicNumber){
    guess = prompt('Try to guess what number I\'m thinking of!')
    if(guess<magicNumber){
        console.log('Too low!')
        if(guess>magicNumber-10){
            console.log('Getting Warmer!')
        }
    }
    else if(guess>magicNumber){
        console.log('Too high!')
            if(guess<magicNumber+10){
                console.log('Getting Warmer!')
            }
    }
    else if(guess==magicNumber){
        console.log(`${magicNumber} is the correct number! Congratulations!!!`)
    }
}