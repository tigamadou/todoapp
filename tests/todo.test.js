
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
  const recievedData = testProject.edit(defaultName);
  expect(receivedData[0]).toEqual(defaultName);
  
});