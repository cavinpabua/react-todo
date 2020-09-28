import { TodoStorage } from "../entities/todoStorage";

export interface TodoStorageRepository {
  GetTodos(): TodoStorage[];
  AddTodo(Todo:any):any;
  DeleteTodo(id:number):any;
  MarkCompleteTodo(id:number):any;
  localStorageGet(name:string):any;
  localStorageSet(name:string, value:any):any;
}
