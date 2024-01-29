export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(user) {
    if (this.members.has(user)) {
      throw new Error('Такой песонаж уже есть');
    }
    this.members.add(user);
  }

  addAll(...users) {
    users.forEach((user) => {
      this.members.add(user);
    });
  }

  toArray() {
    return [...this.members.keys()];
  }
}
