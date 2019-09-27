import { Ajax } from '../../utils/ajax.util';
import { appConfig } from '../../../lesson_17/config';

export class TaskList {
  constructor(target) {
    this.target = target;
    this.render();
    Ajax.get(`${appConfig.apiUrl}/list`, this.renderListItems.bind(this))
  }

  render() {
    this.renderList();
  }

  renderList() {
    this.ul = document.createElement('ul');
    this.ul.classList.add('task-list__list');
    this.target.appendChild(this.ul);
  }

  renderListItems(listItems) {
    const documentFragment = document.createDocumentFragment();
    this.listItems = [];

    listItems.forEach((item) => {
      const li = document.createElement('li');
      li.classList.add('task-list__item');
      li.textContent = item.title;
      this.listItems.push(li);
      documentFragment.appendChild(li);
    });

    this.ul.appendChild(documentFragment);
  }
}