import './hw_11.scss';

const accordion = document.querySelector(".accordion");
const listElem = Array.from(accordion.querySelectorAll(".accordion__list"));
const textClosed = document.querySelector(".text__closed");
const textOpened = document.querySelector(".text__opened");

for (let i = 0; i < listElem.length; i++) {
    listElem[i].addEventListener('click', function open() {
    let opened = this.nextElementSibling.classList.toggle("text__opened");
    if (opened.style.display === "block") {
      opened.style.display = "none";
    } else {
      opened.style.display = "block";
    } 
  });
}