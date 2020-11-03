function App() {
  const projects = [];
  let selectedProject = null;
  let selectedTodo = null;

  this.storeToLocal = () => {
    const datas = [];
    projects.forEach((project) => {
      datas.push({ name: project.getName(), id: project.getId(), todos: project.getDatas() });
    });
    localStorage.setItem('projects', JSON.stringify(datas));
  };
  this.addProject = (project) => {
    const exists = projects.filter((element) => project.getName() === element.getName())[0];
    if (!exists) {
      projects.push(project);
      return true;
    }

    return false;
  };

  this.addTodo = todo => {
    if (selectedProject) {
      const project = projects.filter((element) => selectedProject.getId() === element.getId())[0];
      const exists = project.getTodos().filter((element) => todo.getId() === element.getId())[0];
      if (exists) { return false; }

      project.addTodo(todo);
      this.setSelectedProject(project);
      return true;
    }

    return false;
  };

  this.editTodo = data => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos()
      .findIndex(element => element.getId() === selectedTodo.getId());
    const todo = { ...selectedTodo };
    todo.edit('', data.description, data.date, data.priority, todo.isChecked());
    todo.setName(data.name);
    todo.setId(data.name);
    project.updateTodo(todoIndex, todo);
    projects[projectIndex] = project;
    this.setSelectedProject(project);
  };

  this.deleteTodo = () => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos()
      .findIndex(element => element.getId() === selectedTodo.getId());
    project.deleteTodo(todoIndex);
    projects[projectIndex] = project;
    this.setSelectedProject(project);
  };

  this.getAll = () => projects;

  this.getProject = (id) => {
    const answ = projects.filter((element) => id === element.getId());
    if (answ.length === 0) {
      return false;
    }
    return answ[0];
  };

  this.getTodo = (id) => {
    if (selectedProject) {
      const project = projects.filter((element) => selectedProject.getId() === element.getId())[0];
      const todo = project.getTodos().filter((element) => id === element.getId())[0];
      if (!todo) { return false; }
      return todo;
    }
    return false;
  };
  this.upDateTodoChecked = (todo) => {
    const projectIndex = projects.findIndex(element => element.getId() === selectedProject.getId());
    const project = { ...projects[projectIndex] };
    const todoIndex = project.getTodos().findIndex(element => element.getId() === todo.getId());
    todo.toggleChecked();
    project.updateTodo(todoIndex, todo);
    projects[projectIndex] = project;
  };
  this.setSelectedProject = (project) => {
    selectedProject = project;
  };

  this.setSelectedTodo = (todo) => {
    selectedTodo = todo;
  };

  this.getSelectedProject = () => {
    if (selectedProject) {
      return selectedProject;
    }
    return false;
  };
}

export default App;