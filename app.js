const cards = document.querySelectorAll(".card");
const scoreEl = document.querySelector(".score");
const timeEl = document.querySelector(".time");

let cardOne,
  cardTwo,
  disabledCard = false,
  counter = 0;
let timer = 30,
  score = 0;
let startGame = false;

// function initTimer() {
//    let interval = setInterval(() => {
//       if(timer > 0) {
//         timer--;
//         return timeEl.innerText = `time: ${timer}`;
//       }

//       clearInterval(interval);
//       timer = 30;
//       timeEl.innerText = `time: ${timer}`;
//       alert('game Over?');
//       shuffledCard();
//    }, 1000);
// }

function flipedCard(e) {
  //   if (!startGame) {
  //     initTimer(30);
  //     return (startGame = true);
  //   }

  let clickedCard = e.target;
  if (clickedCard !== cardOne && !disabledCard) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }

    cardTwo = clickedCard;
    disabledCard = true;
    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchCard(cardOneImg, cardTwoImg);
  }
}

function matchCard(img1, img2) {
  if (img1 === img2) {
    counter++;
    //  score = counter;
    //  scoreEl.innerText = `Score: ${score}`;
    //  if (score == 8) {
    //    setTimeout(() => {
    //       alert('Gongra! You Win');
    //      return shuffledCard();
    //    }, 1000);
    //  }
    if (counter == 8) {
      setTimeout(() => {
        return shuffledCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipedCard);
    cardTwo.removeEventListener("click", flipedCard);
    cardOne = cardTwo = "";
    return (disabledCard = false);
  }

  setTimeout(() => {
    cardOne.classList.add("shaked");
    cardTwo.classList.add("shaked");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("flip", "shaked");
    cardTwo.classList.remove("flip", "shaked");
    cardOne = cardTwo = "";
    disabledCard = false;
  }, 1200);
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
//  console.log(Math.random());
//  console.log(Math.random() > 0.5 ? 1 : -1 );
//  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
//  console.log(arr);

function shuffledCard() {
  (counter = 0), (disabledCard = false);
  cardOne = cardTwo = "";
  // score = 0;
  // scoreEl.innerText = `Score: ${score}`;
  // startGame = false;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let tagImg = card.querySelector("img");
    console.log(arr[index], index);
    tagImg.src = `imgs/img-${arr[index]}.png`;
    card.addEventListener("click", flipedCard);
  });
}

shuffledCard();

cards.forEach((card) => {
  //   card.classList.add('flip');
  card.addEventListener("click", flipedCard);
});
