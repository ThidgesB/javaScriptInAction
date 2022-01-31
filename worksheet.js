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