function createDom(name, text = null, attributes = null) {
  const element = document.createElement(name);
  if (text != null) {
    element.innerHTML = text;
  }
  if (attributes != null && typeof attributes === 'object') {
    attributes.forEach((attribute) => {
      element.setAttribute(attribute.name, attribute.value);
    });
  }
  return element;
}

class UI {
  constructor() {
    this.title = 'Todo App';
    this.layout = {};
    this.views = {};
    this.activeView = null;

    this.app = createDom('div', null, [{ name: 'class', value: 'app' }]);
    this.sidebar = createDom('div', null, [{ name: 'class', value: 'sidebar' }]);
    this.projects = createDom('div', null, [{ name: 'class', value: 'projects' }]);
    this.projects_header = createDom('div', null, [{ name: 'class', value: 'header' }]);
    this.projects_h1 = createDom('h1', this.title);
    this.newProjectButton = createDom('div', 'Create New Project', [{ name: 'class', value: 'newProjectButton' }]);

    this.projects_header.appendChild(this.projects_h1);

    this.sidebar_content = createDom('div', null, [{ name: 'class', value: 'content' }]);

    this.projectList = createDom('ul', null, [{ name: 'class', value: 'projectList' }]);

    this.sidebar_content.append(this.newProjectButton,this.projectList);

    this.projects.append(this.projects_header,this.sidebar_content);
    this.sidebar.appendChild(this.projects);

    this.container = createDom('div', null, [{ name: 'class', value: 'container' }]);

    this.app.append(this.sidebar, this.container);
    this.createViews();
  }

  createViews() {
    this.views = [
      {
        name: 'default',
        value: this.defaultView(),
      },
      {
        name: 'newProject',
        value: this.newProjectView(),
      },
      {
        name: 'showProject',
        value: null,
      },
    ];
  }

  defaultView() {
    const viewBody = createDom('div', null, [{ name: 'class', value: 'body' }]);
    const defaultView = createDom('div', null, [{ name: 'class', value: 'defaultView' }]);
    const viewtitle = createDom('h2', 'WelCome on ToDo App', [{ name: 'class', value: 'title' }]);

    viewBody.append(viewtitle, defaultView);
    return viewBody;
  }

  newProjectView() {
    const viewHeader = createDom('div', null, [{ name: 'class', value: 'header' }]);
    const viewtitle = createDom('h2', 'Create new Project', [{ name: 'class', value: 'title' }]);
    viewHeader.appendChild(viewtitle);
    const viewBody = createDom('div', null, [{ name: 'class', value: 'body' }]);
    this.projectForm = createDom('form', null, [{ name: 'class', value: 'projectForm' }]);
    const projectFormField = createDom('div', null, [{ name: 'class', value: 'field' }]);
    this.projectFormFieldInput = createDom('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'project-name' },
        { name: 'id', value: 'newProjectInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Project Name' },
      ]);
    this.projectFormFieldButton = createDom('button', null, [{ name: 'class', value: 'btn' }]);
    const projectFormFieldIcon = createDom('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    const projectFormFieldText = createDom('span', 'Add');
    this.projectFormFieldButton.append(projectFormFieldText, projectFormFieldIcon);
    projectFormField.appendChild(this.projectFormFieldInput);
    projectFormField.appendChild(this.projectFormFieldButton);
    this.projectForm.appendChild(projectFormField);
    viewBody.appendChild(this.projectForm);
    return [viewHeader, viewBody];
  }

  showProjectView() {
    const containerHeader = createDom('div', null, [{ name: 'class', value: 'header' }]);
    this.containerHeadertitle = createDom('h2', this.selectedProject.getName(), [{ name: 'class', value: 'title' }]);
    containerHeader.append(this.containerHeadertitle);
    // this.renderView([containerHeader]);
    const viewBody = createDom('div', null, [{ name: 'class', value: 'body' }]);
    this.todoForm = createDom('form', null, [{ name: 'class', value: 'TodoForm' }]);
    const todoFormField = createDom('div', null, [{ name: 'class', value: 'field' }]);
    this.todoFormFieldInput = createDom('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'todo-name' },
        { name: 'id', value: 'newTodoInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Add a Task' },
      ]);
    this.todoFormFieldButton = createDom('button', null, [{ name: 'class', value: 'btn' }]);
    const todoFormFieldIcon = createDom('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    this.todoFormFieldButton.appendChild(todoFormFieldIcon);
    todoFormField.appendChild(this.todoFormFieldInput);
    todoFormField.appendChild(this.todoFormFieldButton);
    this.todoForm.appendChild(todoFormField);

    this.todoList = createDom('ul', null, [{ name: 'class', value: 'todoList' }]);

    const todos = this.selectedProject.getTodos();
    todos.forEach((todo) => this.addTodo(todo));
    viewBody.append(this.todoForm, this.todoList);

    return [containerHeader, viewBody];
  }

  addProject(project) {
    const element = createDom('li', project.getName(), [{ name: 'class', value: 'project' }, { name: 'id', value: project.getId() }]);
    this.projectList.appendChild(element);
  }

  addTodo(todo) {
    const TodoElement = createDom('li', null, [{ name: 'class', value: 'todo' }, { name: 'id', value: todo.getId() }]);
    const todoCheckInput = createDom('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'checkbox' },
        { name: 'name', value: 'todoChecklist' },
        { name: 'id', value: `${todo.getId()}TodoInput` },
      ]);

    const todoLabel = createDom('label', null, [{ name: 'for', value: `${todo.getId()}TodoInput` }, { name: 'class', value: 'todoChecklistLabel' }, { name: 'data-id', value: todo.getId() }]);
    const todoDetails = createDom('div', null, [{ name: 'class', value: 'details' }]);
    const todoPreview = createDom('div', null, [{ name: 'class', value: 'preview' }]);
    const todoPreviewTitle = createDom('div', todo.getName(), [{ name: 'class', value: 'title' }]);
    const todoPreviewTagContainer = createDom('div', null, [{ name: 'class', value: 'tags' }]);

    const todoPreviewDateTag = createDom('span', null, [{ name: 'class', value: 'tag' }]);
    const todoPreviewDateTagIcon = createDom('span', null, [{ name: 'class', value: 'icon' }]);
    const todoPreviewDateTagIconElement = createDom('i', null, [{ name: 'class', value: 'fa fa-calendar' }]);
    todoPreviewDateTagIcon.appendChild(todoPreviewDateTagIconElement);
    const todoPreviewDateTagContent = createDom('span', todo.getDate());
    todoPreviewDateTag.append(todoPreviewDateTagIcon, todoPreviewDateTagContent);
    todoPreviewTagContainer.appendChild(todoPreviewDateTag);
    todoPreview.append(todoPreviewTitle, todoPreviewTagContainer);

    const todoMoreButtonIcon = createDom('i', null, [{ name: 'class', value: 'fa fa-chevron-right' }]);
    const todoMoreButton = createDom('div', null, [{ name: 'class', value: 'button' }]);
    todoMoreButton.appendChild(todoMoreButtonIcon);
    const todoMore = createDom('div', null, [{ name: 'class', value: 'more' }]);
    todoMore.appendChild(todoMoreButton);
    todoDetails.append(todoPreview, todoMore);

    if (todo.isChecked()) {
      todoCheckInput.setAttribute('checked', true);
      TodoElement.classList.add('is-checked');
    }
    TodoElement.classList.add(`is-${todo.getPriority()}`)
    TodoElement.append(todoCheckInput, todoLabel, todoDetails);

    this.todoList.appendChild(TodoElement);
  }

  

  selectProject(project) {
    this.unselectAllProject();
    const selected = document.querySelector(`#${project.getId()}`);
    selected.classList.add('active');
    this.selectedProject = project;
    this.views[2].value = '';
    this.views[2].value = this.showProjectView();
    return true;
  }

  unselectAllProject() {
    const elements = document.querySelectorAll('.projectList .project');
    elements.forEach((e) => {
      e.classList.remove('active');
    });
  }

  renderView(viewName) {
    if (this.activeView === viewName) { return false; }
    this.activeView = viewName;
    const views = this.views.find(element => element.name === viewName);
    this.container.innerHTML = '';
    if (!views) {
      return false;
    }

    if (Array.isArray(views.value)) {
      views.value.forEach((view) => {
        this.container.appendChild(view);
      });
    } else {
      this.container.appendChild(views.value);
    }
    return true;
  }

  render() {
    return this.app;
  }
}

export default UI;