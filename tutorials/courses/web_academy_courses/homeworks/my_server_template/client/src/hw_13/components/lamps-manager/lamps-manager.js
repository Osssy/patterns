import {Lamp} from '../lamp/lamp';

const LAMP_ACTIVE_CLASS_NAME = `lamp__active`;

export class LampsManager {
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.lamps = [];
    this.isDisabled = this.targetEl.classList.contains(LAMP_ACTIVE_CLASS_NAME);
    this.render();
  }

  render() {
    this.addBtn = document.createElement('button');
    this.toggleAllBtn = document.createElement('button');

    this.addBtn.textContent = 'ADD LAMP';
    this.toggleAllBtn.textContent = 'TOGGLE ALL';

    this.addBtn.addEventListener('click', () =>  this.addLamp());
    this.toggleAllBtn.addEventListener('click', () =>  this.toggleAll());

    this.targetEl.appendChild(this.addBtn);
    this.targetEl.appendChild(this.toggleAllBtn);
  }

  addLamp() {
    const lampWrapper = document.createElement('div');
    const lamp = new Lamp(lampWrapper);
    this.lamps.push(lamp);
    this.targetEl.appendChild(lampWrapper);
  }

  toggleAll() {
    if(this.isDisabled) {
      this.disableAll();
    } else {
      this.enableAll();
    }
  }

  enableAll() {
    this.lamps.forEach((lamp) => lamp.enable());
  }

  disableAll() {
    this.lamps.forEach((lamp) => lamp.disable());
  }

  enable() {
    this.targetEl.classList.add(LAMP_ACTIVE_CLASS_NAME);
    this.colorEl.style.backgroundColor = colors[randomColor];
    this.controlEl.style.backgroundColor = "green";
    this.isDisabled = true;
  }

  disable() {
    this.targetEl.classList.remove(LAMP_ACTIVE_CLASS_NAME);
    this.colorEl.removeAttribute('style');
    this.controlEl.removeAttribute('style');
    this.isDisabled = false;
  }
}
