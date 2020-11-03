import Todo from '../src/components/Todo';

const defaultName = 'Test Project';

test('To test if the project data contains, Name, Id, and Todo', () => {
  const testTodo = new Todo(defaultName);
  const expectedData = {
    id: `${defaultName.toLowerCase().replace(/\W/g, '')}${new Date().getTime()}`,
    name: defaultName,
    description: null,
    date: null,
    priority: 'default',
    checked: null,
  };
  const receivedData = testTodo.getDatas();
  expect(receivedData.name).toEqual(expectedData.name);
});

test('To test the edit function if it contains the necessary parameters', () => {
  const testTodo = new Todo(defaultName);
  const id = '';
  const description = 'apple';
  const date = new Date().getTime();
  const priority = 'default';
  const checked = false;
  testTodo.edit(id, description, date, priority, checked);
  const receivedData = testTodo.getDatas();
  expect(receivedData.description).toEqual(description);
});