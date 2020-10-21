function createDomElement(name, text = null, attributes = null) {
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
    this.PriorityOptions = ['Default', 'Low', 'Medium', 'High'];

    this.app = createDomElement('div', null, [{ name: 'class', value: 'app' }]);
    this.sidebar = createDomElement('div', null, [{ name: 'class', value: 'sidebar' }]);
    this.projects = createDomElement('div', null, [{ name: 'class', value: 'projects' }]);
    this.projects_header = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.projects_h1 = createDomElement('h1', this.title);
    this.newProjectButton = createDomElement('div', 'Create New Project', [{ name: 'class', value: 'newProjectButton' }]);

    this.projects_header.appendChild(this.projects_h1);

    this.sidebar_content = createDomElement('div', null, [{ name: 'class', value: 'content' }]);

    this.projectList = createDomElement('ul', null, [{ name: 'class', value: 'projectList' }]);

    this.sidebar_content.append(this.newProjectButton, this.projectList);

    this.projects.append(this.projects_header, this.sidebar_content);
    this.sidebar.appendChild(this.projects);

    this.container = createDomElement('div', null, [{ name: 'class', value: 'container' }]);

    this.app.append(this.sidebar, this.container);
    this.createViews();
  }

  createViews() {
    this.views = [
      {
        name: 'default',
        value: UI.defaultView(),
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

  static defaultView() {
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    const defaultView = createDomElement('div', null, [{ name: 'class', value: 'defaultView' }]);
    const viewtitle = createDomElement('h2', 'WelCome on ToDo App', [{ name: 'class', value: 'title' }]);

    viewBody.append(viewtitle, defaultView);
    return viewBody;
  }

  newProjectView() {
    const viewHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    const viewtitle = createDomElement('h2', 'Create new Project', [{ name: 'class', value: 'title' }]);
    viewHeader.appendChild(viewtitle);
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    this.projectForm = createDomElement('form', null, [{ name: 'class', value: 'projectForm' }]);
    const projectFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.projectFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'project-name' },
        { name: 'id', value: 'newProjectInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Project Name' },
      ]);
    this.projectFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn' }]);
    const projectFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    const projectFormFieldText = createDomElement('span', 'Add');
    this.projectFormFieldButton.append(projectFormFieldText, projectFormFieldIcon);
    projectFormField.appendChild(this.projectFormFieldInput);
    projectFormField.appendChild(this.projectFormFieldButton);
    this.projectForm.appendChild(projectFormField);
    viewBody.appendChild(this.projectForm);
    return [viewHeader, viewBody];
  }

  showProjectView() {
    const containerHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.containerHeadertitle = createDomElement('h2', this.selectedProject.getName(), [{ name: 'class', value: 'title' }]);
    containerHeader.append(this.containerHeadertitle);
    // this.renderView([containerHeader]);
    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    this.todoForm = createDomElement('form', null, [{ name: 'class', value: 'TodoForm' }]);
    const todoFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.todoFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'todo-name' },
        { name: 'id', value: 'newTodoInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Add a Task' },
      ]);
    this.todoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn' }]);
    const todoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    this.todoFormFieldButton.appendChild(todoFormFieldIcon);
    todoFormField.appendChild(this.todoFormFieldInput);
    todoFormField.appendChild(this.todoFormFieldButton);
    this.todoForm.appendChild(todoFormField);

    this.todoList = createDomElement('ul', null, [{ name: 'class', value: 'todoList' }]);

    const todos = this.selectedProject.getTodos();
    todos.forEach((todo) => this.addTodo(todo));
    viewBody.append(this.todoForm, this.todoList);

    return [containerHeader, viewBody];
  }

  addProject(project) {
    const element = createDomElement('li', project.getName(), [{ name: 'class', value: 'project' }, { name: 'id', value: project.getId() }]);
    this.projectList.appendChild(element);
  }

  addTodo(todo) {
    const TodoElement = createDomElement('li', null, [{ name: 'class', value: 'todo' }, { name: 'id', value: todo.getId() }]);
    const todoCheckInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'checkbox' },
        { name: 'name', value: 'todoChecklist' },
        { name: 'id', value: `${todo.getId()}TodoInput` },
      ]);

    const todoLabel = createDomElement('label', null, [{ name: 'for', value: `${todo.getId()}TodoInput` }, { name: 'class', value: 'todoChecklistLabel' }, { name: 'data-id', value: todo.getId() }]);
    const todoDetails = createDomElement('div', null, [{ name: 'class', value: 'details' }]);
    const todoPreview = createDomElement('div', null, [{ name: 'class', value: 'preview' }]);
    const todoPreviewTitle = createDomElement('div', todo.getName(), [{ name: 'class', value: 'title' }]);
    const todoPreviewTagContainer = createDomElement('div', null, [{ name: 'class', value: 'tags' }]);
    if (todo.getDate()) {
      const todoPreviewDateTag = createDomElement('span', null, [{ name: 'class', value: 'tag' }]);
      const todoPreviewDateTagIcon = createDomElement('span', null, [{ name: 'class', value: 'icon' }]);
      const todoPreviewDateTagIconElement = createDomElement('i', null, [{ name: 'class', value: 'fa fa-calendar' }]);
      todoPreviewDateTagIcon.appendChild(todoPreviewDateTagIconElement);
      const todoPreviewDateTagContent = createDomElement('span', todo.getDate());
      todoPreviewDateTag.append(todoPreviewDateTagIcon, todoPreviewDateTagContent);
      todoPreviewTagContainer.appendChild(todoPreviewDateTag);
    }
    todoPreview.append(todoPreviewTitle, todoPreviewTagContainer);

    const todoMoreButtonIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-pencil' }, { name: 'data-id', value: todo.getId() }]);
    const todoMoreButton = createDomElement('div', null, [{ name: 'class', value: 'button todoEditButton' }, { name: 'data-id', value: todo.getId() }]);
    todoMoreButton.appendChild(todoMoreButtonIcon);
    const todoMore = createDomElement('div', null, [{ name: 'class', value: 'more' }]);
    todoMore.appendChild(todoMoreButton);
    todoDetails.append(todoPreview, todoMore);

    if (todo.isChecked()) {
      todoCheckInput.setAttribute('checked', true);
      TodoElement.classList.add('is-checked');
    }
    TodoElement.classList.add(`is-${todo.getPriority()}`);
    TodoElement.append(todoCheckInput, todoLabel, todoDetails);

    this.todoList.prepend(TodoElement);
    return TodoElement;
  }

  editTodoView() {
    const containerHeader = createDomElement('div', null, [{ name: 'class', value: 'header' }]);
    this.containerHeadertitle = createDomElement('h2', this.selectedTodo.getName(), [{ name: 'class', value: 'title' }]);
    const backButtonIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-chevron-left todoGobackButtonIcon' }]);
    const backButton = createDomElement('div', null, [{ name: 'class', value: 'todoGobackButton' }]);
    backButton.append(backButtonIcon);
    containerHeader.append(backButton, this.containerHeadertitle);
    this.editTodoForm = createDomElement('form', null, [{ name: 'class', value: 'TodoEditForm' }]);
    const editTodoFormField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    this.editTodoFormFieldInput = createDomElement('input', null,
      [
        { name: 'class', value: 'input' },
        { name: 'type', value: 'text' },
        { name: 'name', value: 'todo-name' },
        { name: 'id', value: 'newTodoInput' },
        { name: 'required', value: true },
        { name: 'placeholder', value: 'Taxt Name' },
        { name: 'value', value: this.selectedTodo.getName() },
      ]);

    editTodoFormField.appendChild(this.editTodoFormFieldInput);

    const DescriptionField = createDomElement('div', null,
      [
        { name: 'class', value: 'field' },
      ]);
    this.DescriptionTextArea = createDomElement('textarea', null,
      [
        { name: 'class', value: 'textarea' },
        { name: 'rows', value: '6' },
        { name: 'placeholder', value: 'Add a description here' },
      ]);
    if (this.selectedTodo.getDescription) {
      this.DescriptionTextArea.textContent = this.selectedTodo.getDescription();
    }
    DescriptionField.append(this.DescriptionTextArea);
    this.DateInput = createDomElement('input', null, [
      { name: 'class', value: 'input' },
      { name: 'type', value: 'date' },
      { name: 'name', value: 'todo-date' },
    ]);
    if (this.selectedTodo.getDate()) {
      this.DateInput.setAttribute('value', this.selectedTodo.getDate());
    }
    const DateField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    DateField.append(this.DateInput);
    this.PriorityInput = createDomElement('select', null, [
      { name: 'class', value: 'input' },
      { name: 'name', value: 'todo-select' },
    ]);

    this.PriorityOptions.forEach((priority) => {
      const PriorityOption = createDomElement('option', priority, [{ name: 'value', value: priority }]);
      if (priority.toLocaleLowerCase() === this.selectedTodo.getPriority()) {
        PriorityOption.setAttribute('selected', true);
      }
      this.PriorityInput.append(PriorityOption);
    });
    const PriorityField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    PriorityField.append(this.PriorityInput);

    const editTodoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-pencil editTodoButonIcon' }]);
    this.editTodoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn is-block editTodoButon' }]);
    this.editTodoFormFieldButton.append(editTodoFormFieldIcon);

    const deleteTodoFormFieldIcon = createDomElement('i', null, [{ name: 'class', value: 'fa fa-times DeleteTodoButonIcon' }]);
    this.deleteTodoFormFieldButton = createDomElement('button', null, [{ name: 'class', value: 'btn is-block is-danger DeleteTodoButon' }, { name: 'type', value: 'reset' }]);
    this.deleteTodoFormFieldButton.append(deleteTodoFormFieldIcon);
    const deleteButtonField = createDomElement('div', null, [{ name: 'class', value: 'field' }]);
    deleteButtonField.append(this.editTodoFormFieldButton, this.deleteTodoFormFieldButton);

    const DatePriorityContainer = createDomElement('div', null, [{ name: 'class', value: 'fields' }]);
    DatePriorityContainer.append(DateField, PriorityField);

    this.editTodoForm.append(
      editTodoFormField,
      DescriptionField,
      DatePriorityContainer,
      deleteButtonField,
    );

    const viewBody = createDomElement('div', null, [{ name: 'class', value: 'body' }]);
    viewBody.append(this.editTodoForm);
    return [containerHeader, viewBody];
  }

  selectTodo(todo) {
    this.selectedTodo = todo;

    this.container.innerHTML = '';
    const views = this.editTodoView();

    views.forEach((view) => {
      this.container.appendChild(view);
    });
  }

  selectProject(project) {
    UI.unselectAllProject();
    const selected = document.querySelector(`#${project.getId()}`);
    selected.classList.add('active');
    this.selectedProject = project;
    this.views[2].value = '';
    this.views[2].value = this.showProjectView();
    return true;
  }

  static unselectAllProject() {
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