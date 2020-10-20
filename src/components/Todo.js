function Todo(vname) {
  let name = vname;
  let description = null;
  let date = null;
  let priority = 'default';
  let checked = false;
  // const timeStamp = ;
  let id = `${vname.toLowerCase().replace(/\W/g, '')}${new Date().getTime()}`;
  this.setId = (name) => {
    id = `${name.toLowerCase().replace(/\W/g, '')}${new Date().getTime()}`;
  };
  this.setName = (vname) => {
    name = vname;
  };
  this.getId = () => id;
  this.getName = () => name;
  this.getDescription = () => description;
  this.getDate = () => date;
  this.getPriority = () => priority;
  this.isChecked = () => checked;
  this.toggleChecked = () => { checked = !checked; };

  this.getDatas = () => ({
    id: this.getId(),
    name: this.getName(),
    description: this.getDescription(),
    date: this.getDate(),
    priority: this.getPriority(),
    checked: this.isChecked(),
  });
  this.edit = (newId, newDescription, newDate, newPriority, newChecked) => {
    id = newId;
    description = newDescription;
    date = newDate;
    priority = newPriority;
    checked = newChecked;
  };
}

export default Todo;
