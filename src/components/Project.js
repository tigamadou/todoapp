function Project(vname) {
  let name = vname;
  const id = `${vname.toLowerCase().replace(/\W/g, '')}`;
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

  this.getTodos = () => todos;

  this.getDatas = () => {
    const datas = [];
    todos.forEach((element) => {
      datas.push(element.getDatas());
    });

    return datas;
  };

  this.updateTodo = (index, todo) => {
    todos[index] = todo;
  };
}

export default Project;