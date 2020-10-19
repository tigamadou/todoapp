class Todo {
  constructor(name, description, date, priority) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = false;
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

  complete() {
    this.checked = true;
  }
}

export default Todo;
