var firstBox = document.getElementsByClassName('firstBox')[0];
var secondBox = document.getElementsByClassName('secondBox')[0];
var thirdBox = document.getElementsByClassName('thirdBox')[0];
var fourthBox = document.getElementsByClassName('fourthBox')[0];
var fifthBox = document.getElementsByClassName('fifthBox')[0];
var sixthBox = document.getElementsByClassName('sixthBox')[0];
var seventhBox = document.getElementsByClassName('seventhBox')[0];
var eighthBox = document.getElementsByClassName('eighthBox')[0];
var ninthBox = document.getElementsByClassName('ninthBox')[0];
var header = document.getElementsByClassName('ticTacToe')[0];
var turns = 0;


firstBox.addEventListener('click', function listener1(){
  if(firstBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  firstBox.innerHTML = 'X';
} else{
  firstBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();


})

secondBox.addEventListener('click', function listener2(){
  if(secondBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  secondBox.innerHTML = 'X';
} else{
  secondBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

thirdBox.addEventListener('click', function listener3(){
  if(thirdBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  thirdBox.innerHTML = 'X';
} else{
  thirdBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

fourthBox.addEventListener('click', function listener4(){
  if(fourthBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  fourthBox.innerHTML = 'X';
} else{
  fourthBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

fifthBox.addEventListener('click', function listener5(){
  if(fifthBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  fifthBox.innerHTML = 'X';
} else{
  fifthBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

sixthBox.addEventListener('click', function listener6(){
  if(sixthBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  sixthBox.innerHTML = 'X';
} else{
  sixthBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

seventhBox.addEventListener('click', function listener7(){
  if(seventhBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  seventhBox.innerHTML = 'X';
} else{
  seventhBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

eighthBox.addEventListener('click', function listener8(){
  if(eighthBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  eighthBox.innerHTML = 'X';
} else{
  eighthBox.innerHTML = 'O';
}

if(gameOver()){
  return;
}
  turns++;
  win();
  draw();

})

ninthBox.addEventListener('click', function listener9(){
  if(ninthBox.innerHTML !== ''){return;}
  if(turns%2 === 0){
  ninthBox.innerHTML = 'X';
} else{
  ninthBox.innerHTML = 'O';
}
if(gameOver()){
  return;
}
 turns++;
  win();
  draw();

})

function draw(){
  if(win()){
    return false;
  }
  if(!win() && turns >= 9){
    header.innerHTML = 'DRAW!';
    return true;
  }
  return false;
}

function gameOver(){
  if(win()){
    return true;
  }
  // if(firstBox === ''){return false;}
  // if(secondBox === ''){return false;}
  // if(thirdBox === ''){return false;}
  // if(fourthBox === ''){return false;}
  // if(fifthBox === ''){return false;}
  // if(sixthBox === ''){return false;}
  // if(seventhBox === ''){return false;}
  // if(eighthBox === ''){return false;}
  // if(ninthBox === ''){return false;}
  return false;
}
function win(){
  //xxx
  //---
  //---
if(firstBox.innerHTML === 'X' && secondBox.innerHTML === 'X' && thirdBox.innerHTML === 'X'){
   header.innerHTML = "X WINS!";
   target.removeEventListener('click', listener1, false);
   target.removeEventListener('click', listener2, false);
   target.removeEventListener('click', listener3, false);
   target.removeEventListener('click', listener4, false);
   target.removeEventListener('click', listener5, false);
   target.removeEventListener('click', listener6, false);
   target.removeEventListener('click', listener7, false);
   target.removeEventListener('click', listener8, false);
   target.removeEventListener('click', listener9, false);
}
//OOO
//---
//---
if(firstBox.innerHTML === 'O' && secondBox.innerHTML === 'O' && thirdBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);
}
//---
//OOO
//---
if(fourthBox.innerHTML === 'O' && fifthBox.innerHTML === 'O' && sixthBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);
}
//---
//xxx
//---
if(fourthBox.innerHTML === 'X' && fifthBox.innerHTML === 'X' && sixthBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);
}
//---
//---
//xxx
if(seventhBox.innerHTML === 'X' && eighthBox.innerHTML === 'X' && ninthBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);
}
//---
//---
//OOO
if(seventhBox.innerHTML === 'O' && eighthBox.innerHTML === 'O' && ninthBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);
}
//O--
//O--
//O--
if(firstBox.innerHTML === 'O' && fourthBox.innerHTML === 'O' && seventhBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//X--
//X--
//X--
if(firstBox.innerHTML === 'X' && fourthBox.innerHTML === 'X' && seventhBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//-X-
//-X-
//-X-
if(secondBox.innerHTML === 'X' && fifthBox.innerHTML === 'X' && eighthBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//-O-
//-O-
//-O-
if(secondBox.innerHTML === 'O' && fifthBox.innerHTML === 'O' && eighthBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//--O
//--O
//--O
if(thirdBox.innerHTML === 'O' && sixthBox.innerHTML === 'O' && ninthBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//--X
//--X
//--X
if(thirdBox.innerHTML === 'X' && sixthBox.innerHTML === 'X' && ninthBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//--X
//-X-
//X--
if(thirdBox.innerHTML === 'X' && fifthBox.innerHTML === 'X' && seventhBox.innerHTML === 'X'){
  header.innerHTML = "X WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//--O
//-O-
//O--
if(thirdBox.innerHTML === 'O' && fifthBox.innerHTML === 'O' && seventhBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
//O--
//-O-
//--O
if(firstBox.innerHTML === 'O' && fifthBox.innerHTML === 'O' && ninthBox.innerHTML === 'O'){
  header.innerHTML = "O WINS!";
  target.removeEventListener('click', listener1, false);
  target.removeEventListener('click', listener2, false);
  target.removeEventListener('click', listener3, false);
  target.removeEventListener('click', listener4, false);
  target.removeEventListener('click', listener5, false);
  target.removeEventListener('click', listener6, false);
  target.removeEventListener('click', listener7, false);
  target.removeEventListener('click', listener8, false);
  target.removeEventListener('click', listener9, false);

}
  //X--
  //-X-
  //--X
  if(firstBox.innerHTML === 'X' && fifthBox.innerHTML === 'X' && ninthBox.innerHTML === 'X'){
    header.innerHTML = "X WINS!";
    target.removeEventListener('click', listener1, false);
    target.removeEventListener('click', listener2, false);
    target.removeEventListener('click', listener3, false);
    target.removeEventListener('click', listener4, false);
    target.removeEventListener('click', listener5, false);
    target.removeEventListener('click', listener6, false);
    target.removeEventListener('click', listener7, false);
    target.removeEventListener('click', listener8, false);
    target.removeEventListener('click', listener9, false);

}
}
