'use strict'
let userName = prompt('Please tell me your name')
//console.log(userName)
alert('nice to meet you ' + userName)

alert('i will ask you 5 questions about me to get to know me better (Answer with Yes or No)')

let myName = prompt('did you know my name?')
myName = myName.toLowerCase()
console.log(myName)
switch(myName) {
    case 'yes':
        alert('Nice ' + userName)
        break;
    case 'no':
        alert('my name is mahmoud abubaker')
}
//console.log(myName)


let prog = prompt('did you like programing?')
prog = prog.toLowerCase()
switch(prog) {
    case 'yes':
        alert('nice me too')
        break;
    case 'no':
        alert('It is a good and fun thing to try it')
}
//console.log(prog)

let myDesgin = prompt('Do you like the design??')
myDesgin = myDesgin.toLowerCase()
switch(myDesgin) {
    case 'yes':
        alert('Well, I can design with multiple programs like Photoshop, its my hobby')
        break;
    case 'no':
        alert('It is a good and fun thing to try it')
}
//console.log(myDesgin)

let myMovies = prompt('Do you like the Movies or Series??')
myMovies = myMovies.toLowerCase()
switch(myMovies) {
    case 'yes':
        alert('It is a good thing, about myself, I prefer series more than movies (the best series for me The mentalist)')
        break;
    case 'no':
        alert('It is a good and fun thing to try it')
}

//console.log(myMovies)

let myAge = prompt('Last question!! did you know my age?')
myAge = myAge.toLowerCase()
switch(myAge) {
    case 'yes':
        alert('nice ' + userName)
        break;
    case 'no':
        alert('my age is 28 ')
}
//console.log(myAge)

alert('nice to meet you ' + userName + ' have good day, On the page there is my full information about me, you can view it')