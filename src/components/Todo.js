function Todo(vname) {
  let name = vname;
  let description = null;
  let date = 'Today';
  let priority = 'high';
  let checked = false;
  const timeStamp = new Date().getTime();
  const id = `${vname.toLowerCase().replace(/\W/g, '')}${timeStamp}`;

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
    id: this.getId(), name: this.getName(), description: this.getDescription(), date: this.getDate(), priority: this.getPriority(), checked: this.isChecked(),
  });
  this.edit = ( newDescription, newDate, newPriority, newChecked) => {

    description = newDescription;
    date = newDate;
    priority = newPriority;
    checked = newChecked;
  };
}

export default Todo;
