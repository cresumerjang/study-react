import { observable, action } from 'mobx';

export default class TodosStore {
  @observable
  todos = [
    {
      id: 0,
      text: '리덕스도 배웠으면',
      checked: true
    },
    {
      id: 1,
      text: 'MobX 도 배워보는건 어떨까',
      checked: false
    }
  ];
  @observable input = '';
  id = 2;

  constructor(root) {
    this.root = root;
  }

  @action
  create(text) {
    this.todos.push({
      id: this.id++,
      text: this.input,
      checked: false
    });
  }

  @action
  toggle(id) {
    const todo = this.todos.find(todo => todo.id === id);
    todo.checked = !todo.checked;
  }

  @action
  remove(id) {
    const todo = this.todos.find(todo => todo.id === id);
    this.todos.remove(todo);
  }

  @action
  setInput(input) {
    this.input = input;
  }
}
