'use strict'
let userName = prompt('Please tell me your name')
 function Ques1(userName){
//console.log(userName)
alert('nice to meet you ' + userName)
alert('i will ask you 7 questions about me to get to know me better (Answer with Yes or No)')
}
Ques1(userName);


let finalScore = 0;
let myName = prompt('did you know my name?')
function Ques2(myName) {

myName = myName.toLowerCase()
// console.log(myName)
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
        return myName;
        
}
// console.log(myName)
}
Ques2(myName);

function Ques3() {
let progjava = prompt('Do I like programming?')
progjava = progjava.toLowerCase()
switch(progjava) {
    case 'yes':
    case 'y':
        alert('Thats right i do programming ')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('Wrong! i do like programming ')
        break;
    default:
        alert('Please enter Yes or No')
       
}
return(progjava);
}Ques3();

// console.log(prog)

let myDesgin = prompt('Do I like the design??')
function Ques4(myDesgin) {

myDesgin = myDesgin.toLowerCase()
switch(myDesgin) {
    case 'yes':
    case 'y':
        alert('Thats right i do like design, and I can design with multiple programs like Photoshop, its my hobby')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('Wrong! i do like design')
        break;
    default:
        alert('Please enter Yes or No')
}return(myDesgin);
}
Ques4(myDesgin); 
// console.log(myDesgin)

function Ques5 () {
let myMovies = prompt('Do I like the Series??')
myMovies = myMovies.toLowerCase()
switch(myMovies) {
    case 'yes':
    case 'y':
        alert('Thats right i do them, about myself, I prefer series more than movies (the best series for me The mentalist)')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('Wrong! i do like Movies and Series')
        break;
    default:
        alert('Please enter Yes or No')
}
return(myMovies);
} 
Ques5 ();

//console.log(myMovies)

let myAge = prompt('Do I like the Travel?')
function Ques6(myAge) {
myAge = myAge.toLowerCase()
switch(myAge) {
    case 'yes':
    case 'y':
        alert(' I do like Travel')
        finalScore++;
        break;
    case 'no':
    case 'n':
        alert('Wrong! i do like Travel ')
        break;
    default:
        alert('Please enter Yes or No')
        
}
}Ques6(myAge)
// console.log(myAge)

function Ques7() {
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
}Ques7();

function Ques8 (){
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
}Ques8();

alert('Thanks you for answering all questions your score is  ' + finalScore +' of 7')
alert('nice to meet you ' + userName + ' have good day, On the page there is my full information about me, you can view it')