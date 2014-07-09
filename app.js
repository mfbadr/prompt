//Return full nam           e
var prompt = require('sync-prompt').prompt;
var firstName = prompt('What is your first name? ');
var lastName = prompt('What is your last name? ');
console.log('You full name is', firstName, lastName)

//      //Return favorite color
var color = prompt('What is your favorite color? ');
console.log('Your favorite color is', color);

// get dog age and convery to human age


var age = prompt('What is your dog\'s  age? ');
// console.log(typeof age)
age = parseInt(age);
// console.log(typeof age)

dogage = age*7
console.log('Your dog is ' + age + ' in human years.');
console.log( 'That\'s ' + dogage + ' in dog years!')

//Get user age
var userAge = prompt('What is your age?');
userAge = parseInt(userAge);

//Drinking age
if(userAge >= 21) {
  console.log('You are 21 or older, go get wasted!')
}else{console.log('You are too young to drink. Too bad!')
    }

 temperature conversion
var scale = prompt('Do you want to convert from F or C? ')
var tempType = scale.ToUpperCase();
if(tempType  === 'F'){
  var temp = prompt('What is your temp in F? ')
  temp = parseInt(temp)
  console.log( temp + ' degrees F is ' + (((temp-32)*5)/9) + ' degrees C')
}else if(tempType === 'C'){
  var temp = prompt('What is your temp in C? ')
  temp = parseInt(temp)
  console.log( temp + ' degrees C is ' + (((temp*9 )/5)+32) + ' degrees F')
}else{console.log(tempType + '  is not a valid scale. Next time please enter F or C')
}

console.log('Welcome to the BMI calculator')
var weightLB
var heightFT
var heightIN

weightLb = prompt('Please enter your weight in lbs: ')
heightFT = prompt('Please enter your height, rounded down to the nearest foot: ')
heightIN = prompt('How many inches above ' + heightFT + ' feet are you? ')

heightFT = parseInt(heightFT)
heightIN = parseInt(heightIN)
  
var heightTotal = (heightFT * 12)+heightIN

console.log('You are', heightTotal, 'inches tall and you weigh', weightLb, 'pounds')
var BMI = ((weightLb * 703)/Math.pow(heightTotal,2))
BMI = parseFloat(BMI).toFixed(1);
console.log('This means you have a BMI of ' + BMI)
