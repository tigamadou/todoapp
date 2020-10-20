class Project {
  constructor(name) {
    this.name = name;
    this.deleted = false;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  delete() {
    this.deleted = true;
  }
}

export default Project;