import './assets/styles/style.scss';
import UI from './ui/UI';
import App from './components/App';
import Project from './components/Project';
import Todo from './components/Todo';

const Layout = new UI();
const APP = new App();

document.body.appendChild(Layout.render());

if (!localStorage.getItem('projects')) {
  const defaultProject = new Project('Today');
  defaultProject.addTodo(new Todo('Default Task'));
  APP.addProject(defaultProject);
  Layout.addProject(defaultProject);

} else {
  const LocalDatas = JSON.parse(localStorage.getItem('projects'));

  LocalDatas.forEach((element) => {
    const project = new Project(element.name);
    element.todos.forEach((todo) => {
      let theTodo = new Todo(todo.name);
      theTodo.edit(todo.description,todo.date,todo.priority,todo.checked)
      project.addTodo(theTodo);
    });
    APP.addProject(project);
    Layout.addProject(project);
  });
}

Layout.renderView('default');

Layout.newProjectButton.addEventListener('click', () => {
  Layout.unselectAllProject();
  Layout.renderView('newProject');
});
Layout.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = Layout.projectFormFieldInput.value;
  if (name.trim() !== '' && name != null) {
    const project = new Project(name);
    const done = APP.addProject(project);
    if (!done) {
      alert('Project already existed');
      return false;
    }
    Layout.projectFormFieldInput.value = '';
    Layout.addProject(project);
    APP.storeToLocal();
  }
});

Layout.app.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = Layout.todoFormFieldInput.value;
  if (name.trim() !== '' && name != null) {
    const todo = new Todo(name);
    const added = APP.addTodo(todo);
    if (!added) {
      alert('Todo already existed in this project');
      return false;
    }
    Layout.addTodo(todo);
    Layout.todoFormFieldInput.value = '';
    APP.storeToLocal();
  }
});

Layout.projectList.addEventListener('click', (event) => {
  if (event.target.classList.contains('project')) {
    const project = APP.getProject(event.target.id);
    if (project) {
      APP.setSelectedProject(project);
      Layout.selectProject(project);
      Layout.renderView('default');
      Layout.renderView('showProject');
    }
  }
});

Layout.app.addEventListener('click', (event) => {
  if (event.target.classList.contains('todoChecklistLabel')) {
    const id = event.target.getAttribute('data-id');

    const todo = APP.getTodo(id);
    if (!todo) {
      alert('Todo Not found!');
      return false;
    }
    var todoLi = document.getElementById(id);
    todoLi.classList.toggle('is-checked');
    APP.upDateTodoChecked(todo);
    APP.storeToLocal();
  }
});