import Project from '../src/components/Project';
import Todo from '../src/components/Todo';

const defaultName = 'Test Project';

test('Project Name is equal to "Testing Name"', () => {
  const testProject = new Project(defaultName);
  const testName = 'Testing Name';
  testProject.setName(testName);
  expect(testProject.getName()).toBe(testName);
});

test('Id is well formatted', () => {
  const testProject = new Project(defaultName);
  const id = `${defaultName.toLowerCase().replace(/\W/g, '')}`;
  expect(testProject.getId()).toBe(id);
});

test('Projects todolist contains the added todo', () => {
  const testProject = new Project(defaultName);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  testProject.addTodo(todo1);
  const todos = testProject.getTodos();
  expect(todos).toContainEqual(todo1);
});

test('Projects todolist should not contains the added todo', () => {
  const testProject = new Project(defaultName);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  testProject.addTodo(todo1);
  testProject.deleteTodo(0);
  const todos = testProject.getTodos();
  expect(todos).toEqual([]);
});

test('Projects todolist should  contains the added todos', () => {
  const testProject = new Project(defaultName);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  const todoName2 = 'todoName2';
  const todo2 = new Todo(todoName2);
  testProject.addTodo(todo1);
  testProject.addTodo(todo2);
  const todos = testProject.getTodos();
  expect(todos).toEqual([todo1, todo2]);
});

test('Projects datas should  contains the added todos datas', () => {
  const testProject = new Project(defaultName);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  const todoName2 = 'todoName2';
  const todo2 = new Todo(todoName2);
  const datas = [todo1.getDatas(), todo2.getDatas()]
  testProject.addTodo(todo1);
  testProject.addTodo(todo2);
  const projectDatas = testProject.getDatas();
  expect(projectDatas).toEqual(datas);
});

test('The updated todo should contain the updated values', () => {
  const testProject = new Project(defaultName);
  const todoName = 'todoName';
  const todo1 = new Todo(todoName);
  testProject.addTodo(todo1);
  const newName= 'Edited Name';
  const Newtodo = new Todo(newName);
  testProject.updateTodo(0, Newtodo);
  const todos = testProject.getTodos();
  expect(todos[0]).toEqual(Newtodo);
});