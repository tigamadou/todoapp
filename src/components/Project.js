function Project(vname) {
  let name = vname;
  let id = `${vname.toLowerCase().replace(/\W/g, '')}`;
  const todos = [];

  this.setName = (vname) => {
    name = vname;
  };

  this.getName = () => name;

  this.getId = () => id;

  this.addTodo = (todo) => {
    todos.push(todo);
  };

  this.deleteTodo = (index) => {
    todos.splice(index, 1);
  };

  this.getAll = () => todos;
}

export default Project;