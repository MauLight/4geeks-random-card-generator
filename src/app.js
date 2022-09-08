/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("You can do this, Mau!");
};

window.onload = function() {
  const cardArr = ["♥", "♦", "♣", "♠"];
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const colArr = ["tomato", "black"];

  let revCards = Math.floor(Math.random() * cardArr.length);
  let revNum = Math.floor(Math.random() * numArr.length);
  let ranCol = Math.floor(Math.random() * colArr.length);

  console.log(revCards);
  console.log(revNum);
  console.log(ranCol);

  const symCard = document.querySelectorAll(".sym");
  for (let i = 0; i < symCard.length; i++)
    symCard[i].innerHTML = cardArr[revCards];

  const cardCol = document.querySelector(".inner");
  if (cardArr[revCards] === "♥" || cardArr[revCards] === "♦") {
    cardCol.style.color = "tomato";
  } else {
    cardCol.style.color = "black";
  }

  const cardNum = document.querySelector("h1");

  if (numArr[revNum] === 13) {
    cardNum.innerHTML = '<i class="fa-solid fa-crown"></i>';
  } else if (numArr[revNum] === 1) {
    cardNum.innerHTML = cardArr[revCards];
  } else if (numArr[revNum] === 12) {
    cardNum.innerHTML = `<i class="fa-solid fa-chess-queen"></i>`;
  } else if (numArr[revNum] === 11) {
    cardNum.innerHTML = `<i class="fa-brands fa-wolf-pack-battalion"></i>`;
  } else {
    cardNum.innerHTML = numArr[revNum];
  }
};

const cardBody1 = document.querySelector("button");
cardBody1.addEventListener("click", e => {
  const cardArr = ["♥", "♦", "♣", "♠"];
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const colArr = ["tomato", "black"];

  let revCards = Math.floor(Math.random() * cardArr.length);
  let revNum = Math.floor(Math.random() * numArr.length);
  let ranCol = Math.floor(Math.random() * colArr.length);

  console.log(revCards);
  console.log(revNum);
  console.log(ranCol);

  const symCard = document.querySelectorAll(".sym");
  for (let i = 0; i < symCard.length; i++)
    symCard[i].innerHTML = cardArr[revCards];

  const cardCol = document.querySelector(".inner");
  if (cardArr[revCards] === "♥" || cardArr[revCards] === "♦") {
    cardCol.style.color = "tomato";
  } else {
    cardCol.style.color = "black";
  }

  const cardNum = document.querySelector("h1");

  if (numArr[revNum] === 13) {
    cardNum.innerHTML = '<i class="fa-solid fa-crown"></i>';
  } else if (numArr[revNum] === 1) {
    cardNum.innerHTML = cardArr[revCards];
  } else if (numArr[revNum] === 12) {
    cardNum.innerHTML = `<i class="fa-solid fa-chess-queen"></i>`;
  } else if (numArr[revNum] === 11) {
    cardNum.innerHTML = `<i class="fa-brands fa-wolf-pack-battalion"></i>`;
  } else {
    cardNum.innerHTML = numArr[revNum];
  }

  console.log(cardArr[revCards]);
  console.log(numArr[revNum]);
  console.log(e.value);
  console.log(cardNum.style);
});
