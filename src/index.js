import './assets/styles/style.scss';
import UI from './ui/UI';
import App from './components/App';
import Project from './components/Project';
import Todo from './components/Todo';

const Layout = new UI();
const APP = new App();

document.body.appendChild(Layout.render());


Layout.newProjectButton.addEventListener('click', () => {
  Layout.renderView('newProject');
});
Layout.projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  const name = Layout.projectFormFieldInput.value;
  if (name.trim() !== '' && name != null) {
    const project = new Project(name);
    let done = APP.addProject(project);
    if (!done) {
      alert('Project already existed');
    }else{
      Layout.projectFormFieldInput.value='';
      Layout.addProject(project);
      Layout.renderView('showProject');
    }
  }
});



const defaultProject = new Project('Today');
APP.addProject(defaultProject);
Layout.addProject(defaultProject);
Layout.renderView('showProject');