let dayOfWeek = 'Monday';

console.log(dayOfWeek);

dayOfWeek = 'Friday';

console.log(`I can\'t wait for ${dayOfWeek}!`);

let animalInput = prompt('What is your favorite animal?')

let colorInput = prompt('What is your favorite color?')

alert(`I've never seen a ${colorInput} ${animalInput}!`)

//Favorite breakfast: Breakfast Burrito
//Favorite Lunch: Chicken Sandwich
//Favorite Dinner: Pan seared chicken breast with steamed veggies.

let timeOfDay = '1800';
let currentMeal = '';

if(timeOfDay<1200){
    currentMeal  = 'Breakfast Burrito'
} else if(timeOfDay>=1200 & timeOfDay<=1700){
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

