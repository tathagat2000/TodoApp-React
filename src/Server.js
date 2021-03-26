import * as _ from "lodash/lang";

class Server {
  constructor() {
    this.data = this.loadDataFromLocalStorage();
    this.FailProbability = 0.01;
  }

  isServerWorking = () => {
    if (Math.random() > this.FailProbability) {
      return true;
    }
    return false;
  };

  getTodo = () => {
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        resolve(this.data);
      } else {
        reject("Please Refresh Again");
      }
    });
  };

  saveDataInLocalStorage = () =>
    localStorage.setItem("todos", JSON.stringify(this.data));

  loadDataFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("todos")) || [];

  findIndexOfTodoById = (id) => this.data.findIndex((todo) => todo.id === id);

  createTodo = (todos) => {
    const todoList = _.castArray(todos);
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.data = [...this.data, ...todoList];
        this.saveDataInLocalStorage();
        resolve("done");
      } else {
        reject("Could Not Add Todo");
      }
    });
  };

  deleteTodo = (todoIds) => {
    const todoIdsList = _.castArray(todoIds);

    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.data = this.data.filter((todo) => {
          return !todoIdsList.includes(todo.id);
        });
        this.saveDataInLocalStorage();

        resolve("done");
      } else {
        reject("Could Not Delete Todo");
      }
    });
  };

  updateTodo = (todos) => {
    const todoList = _.castArray(todos);
    const todoIds = todoList.map((todo) => todo.id);
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.data = this.data.filter((todo) => !todoIds.includes(todo.id));
        this.data = [...this.data, ...todoList];
        this.saveDataInLocalStorage();
        resolve("done");
      } else {
        reject("Could Not Update Todo");
      }
    });
  };
}

const server = new Server();
export { server };
