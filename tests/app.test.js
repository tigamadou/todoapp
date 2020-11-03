import App from '../src/components/App';
import Project from '../src/components/Project';
import Todo from '../src/components/Todo';

const defaultName = 'Test Project';
test('Shold have the project added in the project list', () => {
  const app = new App();
  const ProjectName = 'TestProject';
  const newProject = new Project(ProjectName);
  app.addProject(newProject);
  const projectList = app.getAll();
  expect(projectList).toContainEqual(newProject);
});

test('Shold have the todo added in the selected project todosList', () => {
  const app = new App();
  const ProjectName = 'TestProject';
  const TodoName = 'TestTodo';
  const newProject = new Project(ProjectName);
  const testTodo = new Todo(TodoName);
  app.addProject(newProject);
  app.setSelectedProject(newProject);
  app.addTodo(testTodo);
  const selectedProject = app.getSelectedProject();
  const todosList = selectedProject.getTodos();
  expect(todosList).toEqual([testTodo]);
});

test('The edited todos data should match the expected datas', () => {
  const app = new App();
  const ProjectName = 'TestProject';
  const TodoName = 'TestTodo';
  const name = 'TestTodoEdited';
  const description = 'TestTodoDescription';
  const date = 'today';
  const priority = 'hight';
  const newProject = new Project(ProjectName);
  const testTodo = new Todo(TodoName);
  app.addProject(newProject);
  app.setSelectedProject(newProject);
  app.addTodo(testTodo);
  app.setSelectedTodo(testTodo);
  app.editTodo({
    name, description, date, priority,
  });

  const selectedProject = app.getSelectedProject();
  const todosList = selectedProject.getTodos();
  const editedName = todosList[0].getName();
  expect(editedName).toEqual(name);
});

test('The project todos List should not contain the deleted todo', () => {
  const app = new App();
  const testProject = new Project(defaultName);
  app.addProject(testProject);
  app.setSelectedProject(testProject);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  const todoName2 = 'todoName2';
  const todo2 = new Todo(todoName2);
  app.addTodo(todo1);
  app.addTodo(todo2);
  app.setSelectedTodo(todo2);
  app.deleteTodo();
  const selectedProject = app.getSelectedProject();
  const todos = selectedProject.getTodos();
  expect(todos).toEqual([todo1]);
});

test('The projects list should contains the added projects', () => {
  const app = new App();
  const testProject = new Project(defaultName);
  const testProject2 = new Project(`${defaultName}2`);
  const testProject3 = new Project(`${defaultName}3`);
  app.addProject(testProject);
  app.addProject(testProject2);
  app.addProject(testProject3);
  const projectList = app.getAll();
  expect(projectList).toEqual([testProject, testProject2, testProject3]);
});

test('the project retreived with the id should match the added project', () => {
  const app = new App();
  const testProject = new Project(defaultName);
  const testProject2 = new Project(`${defaultName}2`);
  const testProject3 = new Project(`${defaultName}3`);
  app.addProject(testProject);
  app.addProject(testProject2);
  app.addProject(testProject3);
  const targetId = testProject.getId();
  const targetProject = app.getProject(targetId);
  expect(targetProject).toEqual(testProject);
});

test('the todo retreived with the id should match the added todo', () => {
  const app = new App();
  const testProject = new Project(defaultName);
  app.addProject(testProject);
  app.setSelectedProject(testProject);
  const todo1 = new Todo('todoName');
  const todo2 = new Todo('todoName2');
  app.addTodo(todo1);
  app.addTodo(todo2);
  const targetedId = todo1.getId();
  const targetedTodo = app.getTodo(targetedId);
  expect(targetedTodo).toEqual(todo1);
});

test('the todo updated checked value should match the retreived one value', () => {
  const app = new App();
  const testProject = new Project(defaultName);
  app.addProject(testProject);
  app.setSelectedProject(testProject);
  const todo1 = new Todo('todoName');
  const todo2 = new Todo('todoName2');
  app.addTodo(todo1);
  app.addTodo(todo2);
  todo1.toggleChecked();
  app.upDateTodoChecked(todo1);
  const targetedId = todo1.getId();
  const targetedTodo = app.getTodo(targetedId);
  expect(targetedTodo.isChecked()).toEqual(todo1.isChecked());
});