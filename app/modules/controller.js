class TodosController {

	constructor($firebaseArray) {
    let ref = new Firebase("https://nick-todos.firebaseio.com/todos");

		this.item = "";
    this.list = $firebaseArray(ref);
	}

  addTodo() {
    // make a object with name and completed
    this.list.$add({
      name: this.item,
      created_at: new Date(),
      completed: false
    });
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    console.log(item);
  }

  deleteTodos(item) {
    this.list.$remove(item);
    // this.list.splice(this.list.indexOf(item), 1);
  }
}




export default TodosController;
