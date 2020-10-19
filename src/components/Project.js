class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.deleted = false;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  delete() {
    this.deleted = true;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  getAll() {
    return this.todos;
  }
}

export default Project;