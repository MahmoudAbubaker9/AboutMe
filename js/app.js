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
