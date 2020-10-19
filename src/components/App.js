function App() {
  const projects = [];

  this.addProject = (project) => {
    let exists = projects.filter((element)=> project.getName() === element.getName());
    if(exists.length ===0){

      projects.push(project);
      return true
    }
    return false
  };

  this.deleteTodo = (index) => {
    projects.splice(index, 1);
  };

  this.getAll = () => projects;
}

export default App;