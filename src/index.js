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
      const theTodo = new Todo(todo.name);
      theTodo.edit(todo.id, todo.description, todo.date, todo.priority, todo.checked);
      project.addTodo(theTodo);
    });
    APP.addProject(project);
    Layout.addProject(project);
  });
}

Layout.renderView('default');

Layout.newProjectButton.addEventListener('click', () => {
  Layout.constructor.unselectAllProject();
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
      return false;
    }
    Layout.projectFormFieldInput.value = '';
    Layout.addProject(project);
    APP.storeToLocal();
    return true;
  }
  return false;
});

Layout.app.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (event.target.classList.contains('TodoForm')) {
    const name = Layout.todoFormFieldInput.value;
    if (name.trim() !== '' && name != null) {
      const todo = new Todo(name);
      const added = APP.addTodo(todo);
      if (!added) {
        return false;
      }
      Layout.addTodo(todo);
      Layout.todoFormFieldInput.value = '';
      APP.storeToLocal();
      return true;
    }
  }

  if (event.target.classList.contains('TodoEditForm')) {
    const name = Layout.editTodoFormFieldInput.value;
    const description = Layout.DescriptionTextArea.value;
    const date = Layout.DateInput.value;
    const priority = Layout.PriorityInput.value.toLowerCase();
    APP.editTodo({
      name, description, date, priority,
    });
    const project = APP.getSelectedProject();
    Layout.selectProject(project);
    Layout.renderView('default');
    Layout.renderView('showProject');
    APP.storeToLocal();
  }
  return false;
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
  return true;
});

Layout.app.addEventListener('click', (event) => {
  if (event.target.classList.contains('todoChecklistLabel')) {
    const id = event.target.getAttribute('data-id');

    const todo = APP.getTodo(id);
    if (!todo) {
      return false;
    }
    const todoLi = document.getElementById(id);
    todoLi.classList.toggle('is-checked');
    APP.upDateTodoChecked(todo);
    APP.storeToLocal();
  }

  if (event.target.classList.contains('todoEditButton') || event.target.classList.contains('fa-pencil')) {
    const id = event.target.getAttribute('data-id');
    const todo = APP.getTodo(id);
    if (!todo) {
      return false;
    }
    APP.setSelectedTodo(todo);
    Layout.selectTodo(todo);
  }

  if (event.target.classList.contains('todoGobackButton') || event.target.classList.contains('todoGobackButtonIcon')) {
    Layout.renderView('default');
    Layout.renderView('showProject');
  }

  if (event.target.classList.contains('DeleteTodoButon') || event.target.classList.contains('DeleteTodoButonIcon')) {
    APP.deleteTodo();

    const project = APP.getSelectedProject();
    Layout.selectProject(project);
    Layout.renderView('default');
    Layout.renderView('showProject');
    APP.storeToLocal();
  }

  return true;
});