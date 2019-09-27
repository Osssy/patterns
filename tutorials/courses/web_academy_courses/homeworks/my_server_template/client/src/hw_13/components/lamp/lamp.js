import './lamp.scss';

const TARGET_CLASS_NAME = `lamp`;
const COLOR_CLASS_NAME = `${TARGET_CLASS_NAME}__color`;
const CONTROL_CLASS_NAME = `${TARGET_CLASS_NAME}__control`;
const LAMP_ACTIVE_CLASS_NAME = `lamp__active`;


let colors = ['red', 'yellow', 'green', 'blue', 'orange'];

let randomColor = Math.floor(Math.random() * colors.length);

export class Lamp {
  constructor(targetEl, optionsList) {
    this.targetEl = targetEl;
    this.isExpand = false;
    this.colorEl = null;
    this.controlEl = null;
    this.render();
  }

  render() {
    this.renderColor();
    this.renderControl();
    this.targetEl.classList.add(TARGET_CLASS_NAME);
    this.targetEl.addEventListener('click', () => {
      if (this.isExpand) {
        this.disable();
      } else {
        this.enable();
      }
    });
  }

  renderColor() {
    this.colorEl = document.createElement('div');
    this.colorEl.classList.add(COLOR_CLASS_NAME);
    this.targetEl.appendChild(this.colorEl);
  }

  renderControl() {
    this.controlEl = document.createElement('div');
    this.controlEl.classList.add(CONTROL_CLASS_NAME);
    this.controlEl.textContent = 'ON / OFF';
    this.targetEl.appendChild(this.controlEl);
  }

  enable() {
    this.targetEl.classList.add(LAMP_ACTIVE_CLASS_NAME);
    this.colorEl.style.backgroundColor = colors[randomColor];
    this.controlEl.style.backgroundColor = "green";
    this.isExpand = true;
  }

  disable() {
    this.targetEl.classList.remove(LAMP_ACTIVE_CLASS_NAME);
    this.colorEl.removeAttribute('style');
    this.controlEl.removeAttribute('style');
    this.isExpand = false;
  }
}
