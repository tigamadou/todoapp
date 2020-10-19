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

class App {
  constructor() {
    this.title = 'Todo App';
    this.layout = {};

    this.layout.app = createDom('div', null, [{ name: 'class', value: 'app' }]);
    this.layout.sidebar = createDom('div', null, [{ name: 'class', value: 'sidebar' }]);
    this.layout.projects = createDom('div', null, [{ name: 'class', value: 'projects' }]);
    this.layout.projects_header = createDom('div', null, [{ name: 'class', value: 'header' }]);
    this.layout.projects_h1 = createDom('h1', this.title);
    this.layout.newProjectButton = createDom('div', 'Create New Project', [{ name: 'class', value: 'newProjectButton' }]);

    this.layout.projects_header.append(this.layout.projects_h1, this.layout.newProjectButton);
    this.layout.projects.appendChild(this.layout.projects_header);

    this.layout.sidebar_content = createDom('div', null, [{ name: 'class', value: 'content' }]);
    this.layout.projectForm = createDom('div', null, [{ name: 'class', value: 'projectForm' }]);
    this.layout.projectFormField = createDom('div', null, [{ name: 'class', value: 'field' }]);
    this.layout.projectFormFieldInput = createDom('input', null, [{ name: 'class', value: 'input' }, { name: 'type', value: 'text' }, { name: 'name', value: 'project-name' }, { name: 'id', value: 'newProjectInput' }]);
    this.layout.projectFormFieldButton = createDom('button', null, [{ name: 'class', value: 'btn' }]);
    this.layout.projectFormFieldIcon = createDom('i', null, [{ name: 'class', value: 'fa fa-plus' }]);
    this.layout.projectFormFieldButton.appendChild(this.layout.projectFormFieldIcon);
    this.layout.projectFormField.appendChild(this.layout.projectFormFieldInput);
    this.layout.projectFormField.appendChild(this.layout.projectFormFieldButton);
    this.layout.projectForm.appendChild(this.layout.projectFormField);

    this.layout.projectList = createDom('div', null, [{ name: 'class', value: 'porjectList' }]);

    this.layout.sidebar_content.appendChild(this.layout.projectForm);
    this.layout.sidebar_content.appendChild(this.layout.projectList);

    this.layout.projects.appendChild(this.layout.sidebar_content);
    this.layout.sidebar.appendChild(this.layout.projects);

    this.layout.container = createDom('div', null, [{ name: 'class', value: 'container' }]);

    this.layout.app.append(this.layout.sidebar, this.layout.container);
    this.defaultView();
  }

  defaultView() {
    const viewBody = createDom('div', null, [{ name: 'class', value: 'body' }]);
    const defaultView = createDom('div', null, [{ name: 'class', value: 'defaultView' }]);
    const viewtitle = createDom('h2', 'WelCome on ToDo App', [{ name: 'class', value: 'title' }]);

    viewBody.append(viewtitle, defaultView);
    this.renderView([viewBody]);
  }

  newProject() {
    const viewHeader = createDom('div', null, [{ name: 'class', value: 'header' }]);
    const viewtitle = createDom('h2', 'Create new Project', [{ name: 'class', value: 'title' }]);
    viewHeader.appendChild(viewtitle);
    const viewBody = createDom('div', null, [{ name: 'class', value: 'body' }]);
    const viewBodyTitle = createDom('h1', 'Create new Project');
    viewBody.appendChild(viewBodyTitle);
    this.renderView([viewHeader, viewBody]);
  }

  showProject() {
    const containerHeader = createDom('div', null, [{ name: 'class', value: 'header' }]);
    const containerHeadertitle = createDom('h2', 'Active Project Name', [{ name: 'class', value: 'title' }]);
    const containerHeaderButton = createDom('div', 'Add new Task', [{ name: 'class', value: 'addNewTodo' }]);
    containerHeader.append(containerHeadertitle, containerHeaderButton);
    this.renderView([containerHeader]);
  }

  run() {
    this.layout.newProjectButton.addEventListener('click', () => {
      this.newProject();
    });
  }

  renderView(views) {
    this.layout.container.innerHTML = '';
    if (typeof views === 'object') {
      views.forEach((view) => {
        this.layout.container.appendChild(view);
      });
    } else {
      this.layout.container.appendChild(views);
    }
  }

  render() {
    this.run();
    return this.layout.app;
  }
}

export default App;