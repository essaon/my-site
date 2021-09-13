'use strict'
let tyPudg = confirm ('Будешь играть на Пудже?');
if (tyPudg === false) {
  alert ('Выйди отсюда');
}else {
  alert ('Красава');
}

 var myHTML = document.querySelector('html');
 myHTML.onclick = function () {};
 var myImage = document.querySelector('img');

 myImage.onclick = function() {
     var mySrc = myImage.getAttribute('src');
     if(mySrc === 'images/Pudge_icon.png') {
       myImage.setAttribute ('src','images/download.jpg');
     }else {
       myImage.setAttribute ('src', 'images/Pudge_icon.png');
     }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


 function setUserName() {
   var myName = prompt('Скажи королю своё имя');
   localStorage.setItem('nam', myName);
   myHeading.innerHTML = 'Пудж приветствует вас, ' + myName;
 }
   if(!localStorage.getItem('nam')) {
      setUserName();
   } else {
     var storedName = localStorage.getItem('nam');
     myHeading.innerHTML = 'Пудж приветствует вас, ' + storedName;
   }
     myButton.onclick = function() {
       setUserName();
     }
/* let myFunction = 0;
 let lolWTF = document.querySelector('h2');
    let a = 3;
    while (a < 70 ) {
      lolWTF.innerHTML = a;
      a++
      setTimeout(myFunction, 3000);
    }*/




var myCount = document.querySelector('h4');
var cUont = document.querySelector('h2');
var pjCount = 0;

 if (pjCount === 0){
 cUont.innerHTML = pjCount;
}else{
 cUont.innerHTML = pjCount ;
}
myCount.onclick = function (){
  cUont.innerHTML = pjCount++;
}
//console.log (storedName);
/*let num1 = prompt ('Первое число');
let num2 = prompt ('Второе Число');
alert (num1 * num2);



let userName = prompt("Кто там?", ''); Калька АКА логин и пароль через алерт

if (userName == 'ADMIN') {

let pass = prompt('Пароль?', '');

if (pass == 'Я главный') {
alert( 'Здравствуйте!' );
} else if (pass == '' || pass == null) {
alert( 'Отменено' );
} else {
alert( 'Неверный пароль' );
}

} else if (userName == '' || userName == null) {
alert( 'Отменено' );
} else {
alert( "Я вас не знаю" );
}
*/ //Нааааайс, нашёл способ получше, а не ебаться с циклами!
