
import Project from '../src/components/Project';
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
      checked: null
    }
    const receivedData = testTodo.getDatas()
    expect(receivedData.name).toEqual(expectedData.name);
    
});

test('To test the edit function if it contains the necessary parameters', () => {
  const testTodo = new Todo(defaultName);
  let id = ''
  let description = 'apple'
  let date = new Date().getTime()
  let priority = 'default'
  let checked = false
  testTodo.edit(id, description, date, priority, checked)
  const receivedData = testTodo.getDatas()
  expect(receivedData.description).toEqual(description);

  
});