import { helperFunctions } from "./helperFunctions.js";

export class Server {
  constructor() {
    this.database = this.loadDatabaseFromLocalStorage();
    this.FailProbability = 0.01;
  }

  isServerWorking = () => {
    const current = Math.random();
    if (current > this.FailProbability) {
      return true;
    }
    return false;
  };

  getDatabase = () => {
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        resolve(this.database);
      } else {
        reject("Please Refresh Again");
      }
    });
  };

  saveDatabaseInLocalStorage = () =>
    localStorage.setItem("todos", JSON.stringify(this.database));

  loadDatabaseFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("todos")) || [];

  findIndexOfTodoById = (id) =>
    this.database.findIndex((todo) => todo.id === id);

  createTodo = (todos) => {
    const todoList = helperFunctions.convertToList(todos);
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.database = [...this.database, ...todoList];
        this.saveDatabaseInLocalStorage();
        resolve("done");
      } else {
        reject("Could Not Add Todo");
      }
    });
  };

  deleteTodo = (todoIds) => {
    const todoIdsList = helperFunctions.convertToList(todoIds);

    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.database = this.database.filter((todo) => {
          return !todoIdsList.includes(todo.id);
        });
        this.saveDatabaseInLocalStorage();

        resolve("done");
      } else {
        reject("Could Not Delete Todo");
      }
    });
  };

  updateTodo = (todos) => {
    const todoList = helperFunctions.convertToList(todos);
    const todoIds = todoList.map((todo) => todo.id);
    return new Promise((resolve, reject) => {
      if (this.isServerWorking()) {
        this.database = this.database.filter(
          (todo) => !todoIds.includes(todo.id)
        );
        this.database = [...this.database, ...todoList];
        this.saveDatabaseInLocalStorage();
        resolve("done");
      } else {
        reject("Could Not Update Todo");
      }
    });
  };
}
