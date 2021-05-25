'use strict'
let userName = prompt('Please tell me your name')
//console.log(userName)
alert('nice to meet you ' + userName)

let finalScore = 0;
alert('i will ask you 5 questions about me to get to know me better (Answer with Yes or No)')

let myName = prompt('did you know my name?')
myName = myName.toLowerCase()
console.log(myName)
switch(myName) {
    case 'yes':
    case 'y':    
        alert('Nice ' + userName)
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('my name is mahmoud abubaker')
        break;
    default:
        alert('my name is mahmoud abubaker')
        
}
//console.log(myName)


let prog = prompt('did you like programing?')
prog = prog.toLowerCase()
switch(prog) {
    case 'yes':
    case 'y':
        alert('nice me too')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('It is a good and fun thing to try it')
        break;
    default:
        alert('Please enter Yes or No')
}
//console.log(prog)

let myDesgin = prompt('Do you like the design??')
myDesgin = myDesgin.toLowerCase()
switch(myDesgin) {
    case 'yes':
    case 'y':
        alert('Well, I can design with multiple programs like Photoshop, its my hobby')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('It is a good and fun thing to try it')
        break;
    default:
        alert('Please enter Yes or No')
}
//console.log(myDesgin)

let myMovies = prompt('Do you like the Movies or Series??')
myMovies = myMovies.toLowerCase()
switch(myMovies) {
    case 'yes':
    case 'y':
        alert('It is a good thing, about myself, I prefer series more than movies (the best series for me The mentalist)')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('It is a good and fun thing to try it')
        break;
    default:
        alert('Please enter Yes or No')
}

//console.log(myMovies)

let myAge = prompt('Last question!! did you know my age?')
myAge = myAge.toLowerCase()
switch(myAge) {
    case 'yes':
    case 'y':
        alert('nice ' + userName)
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('my age is 28 ')
        break;
    default:
        alert('Please enter Yes or No')
        
}
//console.log(myAge)

alert('nice to meet you ' + userName + ' have good day, On the page there is my full information about me, you can view it')


let numberofGuess = 4;

let correctAnswe = 5

while(numberofGuess != 0){
    numberofGuess--;
    let guess = prompt('Guess my favorite Number ? (You have 4 Attempts)')

    if (guess == correctAnswe){
        alert('Correct Answer ,Great Job')
        finalScore++;
        break;
    } else if (guess < correctAnswe){
        alert('Too Low, guess agian')
    }else if (guess > correctAnswe){
        alert('Too high, guess agian')
    }
}

if (numberofGuess == 0){
    alert('Wrong Answer ,the correct answer is 5')
}



let numberofGuess2 = 6;
let correctAnswe2 = [5 , 8 , 10 , 14]
let chech = true
while(numberofGuess2 != 0){
    numberofGuess2--;
    let guess2 = prompt('other than the number 5, I have more than one favorite number. take another guess (Hint : numbers from (1-20)')

    for(let x=0 ; x < correctAnswe2.length ; x++ ){
        console.log(correctAnswe2[x]);

    if (guess2 == correctAnswe2[x]){
        alert('Correct Answer ,Great Job')
        finalScore++;
        numberofGuess2 = 0;
        chech = false;
        break;
    } }
if (chech){ 
    alert('Wrong!! , Guess again')

}
}

alert('Thanks you for answering all questions your score is  ' + finalScore +' of 7')