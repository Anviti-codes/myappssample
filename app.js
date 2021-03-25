let userName = 'Jane';
userName? console.log('Hello, Jane!') : console.log('Hello!');
let userQuestion = 'How to play the game?';
console.log(`The user asked: ${userQuestion}`);
const randomNumber = Math.floor(Math.random()*8);
console.log(randomNumber);
let eightBall = '';
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    console.log('It is certain');
    break;
  case 1:
    eightBall = 'It is decidely so';
    console.log('It is decidely so');
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    console.log('Reply hazy try again');
    break;
  case 3:
    eightBall = 'Cannot predict now';
    console.log('Cannot predict now');
    break;
  case 4:
    eightBall = 'Do not count on it';
    console.log('Do not count on it');
    break;
  case 5:
    eightBall =  'My sources say no';
    console.log('My sources say no');
    break;
  case 6:
    eightBall = 'Outlook not so good';
    console.log('Outlook not so good');
    break;
  case 7: 
    eightBall = 'Signs point to yes';
    console.log('Signs point to yes');
    break;
}