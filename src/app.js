/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

// / console.log("Hello World");
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function ranDom_Words(num) {
  let result;
  result = num[Math.floor(Math.random() * num.length)];
  return result;
}

function Gene_Word() {
  let result;
  result =
    ranDom_Words(who) +
    " " +
    ranDom_Words(action) +
    "" +
    ranDom_Words(what) +
    " " +
    ranDom_Words(when);
  // console.log(result)
  return result;
}

// console.log(Gene_Word());
let new_Excuse = Gene_Word();
console.log(new_Excuse);
// document.getElementById("excuse").innerHTML= new_Excuse;document.getElementById("demo").innerHTML = "I have changed!";
document.getElementById("excuse").innerHTML = new_Excuse;
