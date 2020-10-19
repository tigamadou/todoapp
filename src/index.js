import './assets/styles/style.scss';
import AppUI from './ui/App';
import Project from './components/Project';
import Todo from './components/Todo';

const project = new Project('default');
for (let i = 0; i < 10; i += 1) {
  project.addTodo(new Todo(`Task ${i}`, `simple description ${i}${1}`, '19/10/2020', 'default'));
}

project.deleteTodo(0);
function component() {
  const app = new AppUI();
  return app.render();
}
document.body.appendChild(component());
