import "./style.css";
import "./media.css";

const btnMobile = document.getElementById("btn-mobile");
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

/* controle do card de trending nfts */

let btnSlide = document.querySelectorAll(".control");
let currentCard = 0;

let card = document.querySelectorAll("#trending-nfts .galery .card");

const cardLen = card.length;

btnSlide.forEach((control) => {
  control.addEventListener("click", () => {
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentCard -= 1;
    } else {
      currentCard += 1;
    }

    if (currentCard >= cardLen) {
      currentCard = 0;
    }

    if (currentCard < 0) {
      currentCard = cardLen - 1;
    }
    card.forEach((card) => card.classList.remove("currentcard"));
    card[currentCard].scrollIntoView({
      inline: "center",
      block: "center",
    });
    card[currentCard].classList.add("currentcard");
  });
});

/* controle do slide top categories */
let btnSlideCategories = document.querySelectorAll(".control-categories");

let currentCardCategories = 0;

let cardCategories = document.querySelectorAll(".galery .card-categories");

const cardLenCategories = cardCategories.length;

btnSlideCategories.forEach((controlCategories) => {
  controlCategories.addEventListener("click", () => {
    const isLeftCategories = controlCategories.classList.contains("arrow-left");

    if (isLeftCategories) {
      currentCardCategories -= 1;
    } else {
      currentCardCategories += 1;
    }

    if (currentCardCategories >= cardLenCategories) {
      currentCardCategories = 0;
    }

    if (currentCardCategories < 0) {
      currentCardCategories = cardLenCategories - 1;
    }
    cardCategories.forEach((cardCategories) =>
      cardCategories.classList.remove("currentcard-categories")
    );
    cardCategories[currentCardCategories].scrollIntoView({
      inline: "center",
      block: "center",
    });
    cardCategories[currentCardCategories].classList.add(
      "currentcard-categories"
    );
  });
});
/* codigo para verificar o valor da porcentagem de variação do preço da nft */

var prices = document.querySelectorAll("#priceP");

prices.forEach((item) => {
  var priceNum = item.innerHTML.replace(/.[1-100].[1-100]/);
  var priceNumber = parseFloat(priceNum);
  if (priceNumber > 0) {
    item.style.color = "green";
    item.style.opacity = "1";
  } else {
    item.style.color = "red";
    item.style.opacity = "1";
  }
});

/* filtro de colletions */

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
